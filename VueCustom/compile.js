class Compile {
    constructor (vm, el) {
        this.$vm = vm
        this.$el = document.querySelector(el)

        // 创建片段
        this.$fragment = this.nodeToFragment(this.$el)
        this.compile(this.$fragment)
        this.$el.appendChild(this.$fragment)
    }

    nodeToFragment (el) {
        const fragment = document.createDocumentFragment()
        let child;
        while(child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment
    }

    compile (fragment) {
        const childNodes = fragment.childNodes
        Array.from(childNodes).forEach(node => {
            if (node.nodeType === 1) {
                // console.log(`编译元素${node.nodeName}`);
                this.compileElement(node)
            } else if (this.isInter(node)) {
                // console.log(`编译文本${node.textContent}`);
                this.compileText(node)
            }
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

    isInter (node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

    compileText (node) {
        const exp = RegExp.$1
        this.update(node, exp, 'text')
    }

    compileElement (node) {
        const attributes = node.attributes
        Array.from(attributes).forEach(attr => {
            const attrName = attr.name
            const exp = attr.value
            if (attrName.indexOf('k-') === 0) {
                const dir = attrName.substring(2)
                this[dir] && this[dir](node, exp, dir)
            } else if (attrName.indexOf('@') === 0) {
                const dir = attrName.substring(1)
                this.eventHandler(node, exp, dir)
                // node.addEventListener(dir, () => {
                //     this.$vm.$options.methods[exp] && this.$vm.$options.methods[exp].bind(this.$vm)()
                // })
            }
        })
    }

    update (node, exp, dir) {
        const updator = this[dir + 'Updator']
        updator && updator(node, this.$vm[exp])
        new Watcher(this.$vm, exp, function(value) {
            updator && updator(node, value)
        })
    }

    text (node, exp, dir) {
        this.update(node, exp, dir)
    }
    textUpdator (node, value) {
        node.textContent = value
    }

    html (node, exp, dir) {
        this.update(node, exp, dir)
    }
    htmlUpdator (node, value) {
        node.innerHTML = value
    }

    model (node, exp, dir) {
        this.update(node, exp, dir)
        node.addEventListener('input', e => {
            this.$vm[exp] = e.target.value
        })
    }
    modelUpdator (node, value) {
        node.value = value
    }

    eventHandler (node, exp, dir) {
        const fn = this.$vm.$options.methods[exp]
        if (dir && fn) {
            node.addEventListener(dir, fn.bind(this.$vm))
        }
    }
}