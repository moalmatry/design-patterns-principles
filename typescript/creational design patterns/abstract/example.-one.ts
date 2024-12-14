interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}
interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of operation A";
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of operation B";
  }

  combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();

    return `The result of product B collaborating with (${result})`;
  }
}

class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }

  createProductB(): IProductB {
    return new ProductB();
  }
}

const factory = new Factory();

const productA = factory.createProductA();
const productB = factory.createProductB();

console.log(productA.operationA());
console.log(productB.combinedOperation(productA));
