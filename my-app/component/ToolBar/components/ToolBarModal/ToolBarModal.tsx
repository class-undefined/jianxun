import React, { useState } from "react";
import { Article } from "../../../../type/article";
interface MoadlProps {
    className?: string,
    data?: Article,
    [keys: string]: any
}
const Template = (props: {className: string}) => null

class _ToolBarModal {

    private _data: Article | null


    public _template: React.FC<MoadlProps | null>

    public _hash: boolean


    constructor() {
        this._data = null
        this._template = () => <Template className=""/>
        this._hash = false
    }

    private update() {

    }

    public setData(data: Article) {this._data = data}

    public render(_template: React.FC<MoadlProps>) {
        this._template = _template
        this.update()
        return this
    }

    public template() {
        return this._template
    }

    public close() {
        this._template = () => <Template className=""/>
        this.update()
    }
}
export const ToolBarModal = new _ToolBarModal()