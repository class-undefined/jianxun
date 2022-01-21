/**
 * @author: 野漫横江
 */
export interface Css {
    normal: string,
    active: string
}

/**
 * ClassNameBuilder: className构建器
 */
export class ClassNameBuilder {
    private normal: string | null = null
    private active: string | null = null
    private constructor() {} // 对外部禁用构造函数


    static create(): ClassNameBuilder {
        return new ClassNameBuilder()
    }

    /**
     * 提供一个样式变化资源给样式构造器
     * @param classSource 提供样式资源给CssBuilder进行样式构造
     * @returns 返回CssBuilder构造器便于继续构造
     */
    static from(classSource: [string | null, string | null]): ClassNameBuilder {
        const self = new ClassNameBuilder()
        const [normal, active] = classSource
        self.normal = normal
        self.active = active
        return self
    }

    public setNormal(_normal: string): ClassNameBuilder {
        this.normal = _normal
        return this
    }

    public setActive(_active: string): ClassNameBuilder {
        this.active = _active
        return this
    }

    /**
     * 执行构建，创建一个控制normal、active的className函数
     * @returns (factor: boolean) => string
     */
    public build(): (factor: boolean) => string {
        /**
         * @param factor 控制因子，true: 返回 `${this.normal} ${this.active}`； false: 返回 `${this.normal}`
         * @return string
         */
        return (factor: boolean): string =>  {
            return factor ? `${this.normal} ${this.active}` : `${this.normal}`
        }
    } 


}