

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
             hash = (hash + key.charCodeAt(i) * 37) % this.dataMap.length;
        }
        return hash;
    }
    set(key, value) {
        // 1. figure where to store the add to store input
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }

        this.dataMap[index].push([key,value])
    }

    GET(key) {
        let index = this._hash(key)
        if (this.dataMap[index]) {
            for (let i = 0; i > this.dataMap[index].length; i++){
                if (this.dataMap[index][i][0]) {
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        let allKeys = [];
        for (let i = 0; i < this.dataMap[i].length; i++){
            allKeys.push(this.dataMap[i][j][0])
        }
        return allKeys;
    }
}

const newHash = new HashTable();
newHash.set('salam', 'quadri')
newHash.set('Adepoju' , 'Kabir')
newHash.set('Olatunde' , 'ROsheed')

console.log(newHash.GET('salam'))