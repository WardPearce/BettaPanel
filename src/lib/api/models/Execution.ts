/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetadataWithIf } from './MetadataWithIf';
import type { StdinConsoleConfiguration } from './StdinConsoleConfiguration';
export type Execution = {
    autorecover?: boolean;
    autorestart?: boolean;
    autostart?: boolean;
    command?: any;
    environmentVars?: Record<string, string>;
    expectedExitCode?: number;
    post?: Array<MetadataWithIf>;
    pre?: Array<MetadataWithIf>;
    stdin?: StdinConsoleConfiguration;
    stop?: string;
    stopCode?: number;
    workingDirectory?: string;
};

