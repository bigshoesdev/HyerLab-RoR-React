export enum Environment {
  Development = 'development',
  Production = 'production',
}

export interface ClientConfig {
  /* The base URL to which API requests will be made. */
  URL: string;

  /* The property slug making client requests. This should be obtained from the UI. */
  propertySlug?: string;

  /* Defaults to Production. Development will output debug messages. */
  environment?: Environment;
}

export class HypeLab {
  public propertySlug: string;
  public environment: Environment;
  public config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = config;
    this.propertySlug = config.propertySlug || '';
    this.environment = config.environment || Environment.Production;
  }

  loadAd() {
    console.log(`Loading ad...`);
  }

  showAd(id: string) {
    console.log(`Showing ad in container with id ${id}`);
  }
}
