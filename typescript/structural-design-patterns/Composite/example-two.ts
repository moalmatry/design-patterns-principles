interface FileSystemComponent {
  getname(): string;
  getSize(): number;
}

class FileComponent implements FileSystemComponent {
  constructor(
    private name: string,
    private size: number,
  ) {}
  getSize(): number {
    return this.size;
  }
  getname(): string {
    return this.name;
  }
}

interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponents(component: FileComponent): void;
  removeComponent(component: FileComponent): void;
  getComponents(): FileSystemComponent[];
}

class FolderC implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = [];
  constructor(private name: string) {}

  getSize(): number {
    return this.components.reduce(
      (total, component) => total + component.getSize(),
      0,
    );
  }
  getname(): string {
    return this.name;
  }

  addComponents(component: FileComponent): void {
    this.components.push(component);
  }

  removeComponent(component: FileComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }
  getComponents(): FileSystemComponent[] {
    return this.components;
  }
}

// Client code

const file1 = new FileComponent("file1.txt", 100);
const file2 = new FileComponent("file2.txt", 70);
const file3 = new FileComponent("file3.txt", 201);

const folder1 = new FolderC("My Folder");
folder1.addComponents(file1);
folder1.addComponents(file2);
folder1.addComponents(file2);

console.log(folder1.getname());
console.log(folder1.getComponents());
