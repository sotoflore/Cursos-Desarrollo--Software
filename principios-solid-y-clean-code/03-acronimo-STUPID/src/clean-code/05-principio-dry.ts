class Product {

    //public name: string = '';
    //public price: number = 0;
    //public size: string = '';

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: string = ''
    ) {
        //this.name = name;
        //this.price = price;
        //this.size = size;
    }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if (<number><unknown>this[key] <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString() {
        //if (this.name.length <= 0) throw new Error('name is empty');
        //if (this.price <= 0) throw new Error('price is zero');
        //if (this.size.length <= 0) throw new Error('size is empty');

        if (!this.isProductReady()) return;

        return `${this.name} - ${this.price}, ${this.size}`;
    }
}

const bluePants = new Product('Blue large pants', 30, 'M');
console.log(bluePants);