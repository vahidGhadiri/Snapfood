export default function classNameCreator(classes: Array<string | boolean>) {
    const classNames = classes.filter(Boolean);
    return classNames.join(" ");
  }
  