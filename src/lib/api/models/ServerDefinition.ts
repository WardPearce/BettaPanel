/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Execution } from './Execution';
import type { Group } from './Group';
import type { Metadata } from './Metadata';
import type { MetadataWithIf } from './MetadataWithIf';
import type { Requirements } from './Requirements';
import type { Variable } from './Variable';
export type ServerDefinition = {
    data?: Record<string, Variable>;
    display?: string;
    environment?: Metadata;
    groups?: Array<Group>;
    icon?: string;
    id?: string;
    install?: Array<MetadataWithIf>;
    query?: Metadata;
    requirements?: Requirements;
    run?: Execution;
    stats?: Metadata;
    supportedEnvironments?: Array<Metadata>;
    type?: string;
    uninstall?: Array<MetadataWithIf>;
};

