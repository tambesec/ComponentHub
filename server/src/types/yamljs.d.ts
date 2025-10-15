declare module 'yamljs' {
  interface YAMLOptions {
    strict?: boolean;
    indent?: number;
  }

  class YAML {
    static load(path: string, options?: YAMLOptions): any;
    static parse(yamlString: string): any;
    static stringify(obj: any, indent?: number): string;
  }

  export = YAML;
}
