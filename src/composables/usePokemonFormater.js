export class Pokemon{
    constructor(_name = "MissingNo", _types = [], _id = null, _image = null, _stats = null){
        this._name = _name;
        this._types = _types;
        this._id = _id;
        this._image = _image;
        this._stats = _stats;
    }
    get getName(){
        return this._name;
    }
    get getStats(){
        return this._stats;
    }
    get getTypes(){
        return this._types;
    }
    get getId(){
        return this._id;
    }
    get getUrlImage(){
        return this._image;
    }
}