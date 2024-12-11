interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log(`The machine is printing`);
  }
}
class MultifunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log(`The machine is printing`);
  }
  scan(document: Document): void {
    console.log(`The machine is scanning`);
  }
  fax(document: Document): void {
    console.log(`The machine is sending fax`);
  }
}
