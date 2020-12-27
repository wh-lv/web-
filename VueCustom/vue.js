class Vue {
    constructor (options) {
        this.$options = options
        this.$data = options.data

        // 响应化处理
        this.observe(this.$data)

        // new Watcher(this, 'foo')
        // // this.$data.foo
        // new Watcher(this, 'bar.mua')
        // // this.$data.bar.mua
        // new Watcher(this, 'ceshi')

        new Compile(this, options.el)
        if (options.created) {
            options.created.call(this)
        }
    }

    observe (data) {
        if (!data || typeof data !== 'object') {
            return
        }
        Object.keys(data).forEach(key => {
            this.defineProperty(data, key, data[key])
            this.proxyData(key)
        })
    }

    defineProperty (data, key, value) {
        this.observe(value)
        const dep = new Dep() // 一个 key 对应一个 dep，一个 dep 对应多个 Watcher
        Object.defineProperty(data, key, {
            get () {
                Dep.target && dep.addDep(Dep.target)
                return value
            },
            set (newVal) {
                if (newVal !== value) {
                    value = newVal
                    dep.notify()
                }
            }
        })
    }

    proxyData (key) {
        Object.defineProperty(this, key, {
            get () {
                return this.$data[key]
            },
            set (newVal) {
                this.$data[key] = newVal
            }
        })
    }
}

class Dep {
    constructor () {
        this.deps = []
    }

    addDep (dep) {
        this.deps.push(dep)
    }

    notify () {
        this.deps.forEach(dep => dep.update())
    }
}

class Watcher {
    constructor (vm, key, cb) {
        this.vm = vm
        this.key = key
        this.cb = cb

        Dep.target = this
        this.vm[this.key]
        Dep.target = null
    }

    update () {
        // console.log(`${this.key}属性更新了`);
        this.cb.call(this, this.vm[this.key])
    }
}