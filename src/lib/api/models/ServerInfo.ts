/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Node } from './Node';
import type { ServerUser } from './ServerUser';
export type ServerInfo = {
    canGetStatus?: boolean;
    data?: any;
    icon?: string;
    id?: string;
    ip?: string;
    name?: string;
    node?: Node;
    nodeId?: number;
    port?: number;
    type?: string;
    users?: Array<ServerUser>;
};

