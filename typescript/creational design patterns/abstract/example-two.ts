interface Button {
  render(): void;
  onClick(f: Function): void;
}
interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Render button for windows");
  }
  onClick(f: Function): void {
    console.log("Button clicked for windows");
    f();
  }
}

class WindowsCheckBox implements Checkbox {
  constructor(private button: Button) {}
  render(): void {
    console.log("Render checkbox for windows");
  }
  toggle(): void {
    this.button.onClick(() => {
      console.log("Windows checkbox toggled");
    });
  }
}

class MacButton implements Button {
  render(): void {
    console.log("Render button for mac");
  }
  onClick(f: Function): void {
    console.log("Button clicked for mac");
    f();
  }
}

class MacCheckBox implements Checkbox {
  constructor(private button: Button) {}
  render(): void {
    console.log("Render checkbox for mac");
  }
  toggle(): void {
    this.button.onClick(() => {
      console.log("mac checkbox toggled");
    });
  }
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new WindowsCheckBox(button);
  }
}

class MacWindowsFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new MacCheckBox(button);
  }
}

function renderUi(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => console.log("This button clicked"));
  checkbox.toggle();
}

renderUi(new WindowsFactory());
renderUi(new MacWindowsFactory());
