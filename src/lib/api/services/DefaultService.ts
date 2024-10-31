/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeMultipleSettings } from '../models/ChangeMultipleSettings';
import type { CreatedServer } from '../models/CreatedServer';
import type { CreatedServerId } from '../models/CreatedServerId';
import type { DaemonRunning } from '../models/DaemonRunning';
import type { EditableConfigSettings } from '../models/EditableConfigSettings';
import type { Features } from '../models/Features';
import type { GetServer } from '../models/GetServer';
import type { models_Client } from '../models/models_Client';
import type { models_UserPermissionsView } from '../models/models_UserPermissionsView';
import type { NamedServer } from '../models/NamedServer';
import type { Node } from '../models/Node';
import type { NodeDeploymentConfig } from '../models/NodeDeploymentConfig';
import type { OAuth2TokenRequest } from '../models/OAuth2TokenRequest';
import type { OAuth2TokenResponse } from '../models/OAuth2TokenResponse';
import type { Permissions } from '../models/Permissions';
import type { ServerData } from '../models/ServerData';
import type { ServerDefinition } from '../models/ServerDefinition';
import type { ServerFlags } from '../models/ServerFlags';
import type { ServerLogs } from '../models/ServerLogs';
import type { ServerRunning } from '../models/ServerRunning';
import type { ServerSearchResults } from '../models/ServerSearchResults';
import type { ServerStats } from '../models/ServerStats';
import type { ServerTask } from '../models/ServerTask';
import type { ServerTasks } from '../models/ServerTasks';
import type { Setting } from '../models/Setting';
import type { Task } from '../models/Task';
import type { Template } from '../models/Template';
import type { TemplateRepo } from '../models/TemplateRepo';
import type { User } from '../models/User';
import type { UserSearch } from '../models/UserSearch';
import type { UserSearchResponse } from '../models/UserSearchResponse';
import type { UserSetting } from '../models/UserSetting';
import type { UserSettings } from '../models/UserSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get config
     * Gets the editable config entries for the panel
     * @returns EditableConfigSettings OK
     * @throws ApiError
     */
    public static getApiConfig(): CancelablePromise<EditableConfigSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/config',
        });
    }
    /**
     * Get nodes
     * Gets all nodes registered to the panel
     * @returns Node Nodes
     * @throws ApiError
     */
    public static getApiNodes(): CancelablePromise<Array<Node>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/nodes',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Create node
     * Creates a node
     * @returns Node Node created
     * @throws ApiError
     */
    public static postApiNodes(): CancelablePromise<Node> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/nodes',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get node
     * Gets information about a single node
     * @param id Node Id
     * @returns Node Nodes
     * @throws ApiError
     */
    public static getApiNodes1(
        id: string,
    ): CancelablePromise<Node> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/nodes/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Update node
     * Updates a node with given information
     * @param id Node Id
     * @param node Node information
     * @returns void
     * @throws ApiError
     */
    public static putApiNodes(
        id: string,
        node: Node,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/nodes/{id}',
            path: {
                'id': id,
            },
            body: node,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Deletes a node
     * Deletes the node
     * @param id Node Id
     * @returns void
     * @throws ApiError
     */
    public static deleteApiNodes(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/nodes/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Gets the data to deploy a node
     * Gets the secret information needed to deploy a node.
     * @param id Node Id
     * @returns NodeDeploymentConfig OK
     * @throws ApiError
     */
    public static getApiNodesDeployment(
        id: string,
    ): CancelablePromise<NodeDeploymentConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/nodes/{id}/deployment',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Gets the features a node supports
     * Gets the environments and if docker is supported on a node
     * @param id Node Id
     * @returns Features OK
     * @throws ApiError
     */
    public static getApiNodesFeatures(
        id: string,
    ): CancelablePromise<Features> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/nodes/{id}/features',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get your user info
     * Gets the user information of the current user
     * @returns User OK
     * @throws ApiError
     */
    public static getApiSelf(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/self',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Update your user
     * Update user information for your current user
     * @param user User information
     * @returns void
     * @throws ApiError
     */
    public static putApiSelf(
        user: User,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/self',
            body: user,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Gets registered OAuth2 clients
     * Gets known OAuth2 clients the logged-in user has registered
     * @returns models_Client OK
     * @throws ApiError
     */
    public static getApiSelfOauth2(): CancelablePromise<Array<models_Client>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/self/oauth2',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Create an account-level OAuth2 client
     * @param client Information for the client to create
     * @returns models_Client OK
     * @throws ApiError
     */
    public static postApiSelfOauth2(
        client?: models_Client,
    ): CancelablePromise<models_Client> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/self/oauth2',
            body: client,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Deletes an account-level OAuth2 client
     * @param id Information for the client to create
     * @returns void
     * @throws ApiError
     */
    public static deleteApiSelfOauth2(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/self/oauth2/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Search servers
     * Gets servers, and allowing for filtering of servers. * is a wildcard that can be used for text inputs
     * @param username Username to filter on, default is current user if NOT admin
     * @param node Node ID to filter on
     * @param name Name of server to filter on
     * @param limit Max number of results to return
     * @param page What page to get back for many results
     * @returns ServerSearchResults OK
     * @throws ApiError
     */
    public static getApiServers(
        username?: string,
        node?: number,
        name?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<ServerSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers',
            query: {
                'username': username,
                'node': node,
                'name': name,
                'limit': limit,
                'page': page,
            },
        });
    }
    /**
     * Get a server
     * Gets a particular server
     * @param id Server ID
     * @returns GetServer OK
     * @throws ApiError
     */
    public static getApiServers1(
        id: string,
    ): CancelablePromise<GetServer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create server
     * Creates a server
     * @param id Server ID
     * @param server Creation information
     * @returns CreatedServerId OK
     * @throws ApiError
     */
    public static putApiServers(
        id: string,
        server: CreatedServer,
    ): CancelablePromise<CreatedServerId> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
            body: server,
        });
    }
    /**
     * Deletes a server
     * Deletes a server from the panel
     * @param id Server ID
     * @returns void
     * @throws ApiError
     */
    public static deleteApiServers(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create archive
     * Creates an archive of files or folders
     * @param id Server ID
     * @param files Files to archive
     * @param filename Archive name
     * @returns void
     * @throws ApiError
     */
    public static postApiServersArchive(
        id: string,
        files: Array<string>,
        filename: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/archive/{filename}',
            path: {
                'id': id,
                'filename': filename,
            },
            body: files,
        });
    }
    /**
     * Get logs
     * Get the console logs for the server
     * @param id Server ID
     * @param time Epoch time in MS to get from
     * @returns ServerLogs OK
     * @throws ApiError
     */
    public static getApiServersConsole(
        id: string,
        time?: number,
    ): CancelablePromise<ServerLogs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/console',
            path: {
                'id': id,
            },
            query: {
                'time': time,
            },
        });
    }
    /**
     * Send command
     * Sends a command to the server
     * @param id Server ID
     * @param command Command
     * @returns void
     * @throws ApiError
     */
    public static postApiServersConsole(
        id: string,
        command: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/console',
            path: {
                'id': id,
            },
            body: command,
        });
    }
    /**
     * Get server data
     * Get server variables
     * @param id Server ID
     * @returns ServerData OK
     * @throws ApiError
     */
    public static getApiServersData(
        id: string,
    ): CancelablePromise<ServerData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/data',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update server data with admin level rights
     * Updates a server's set of variables
     * @param id Server ID
     * @param server Server variables
     * @returns any Accepted
     * @throws ApiError
     */
    public static putApiServersData(
        id: string,
        server: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}/data',
            path: {
                'id': id,
            },
            body: server,
        });
    }
    /**
     * Update server data
     * Updates a server's set of variables
     * @param id Server ID
     * @param server Server variables
     * @returns any Accepted
     * @throws ApiError
     */
    public static postApiServersData(
        id: string,
        server: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/data',
            path: {
                'id': id,
            },
            body: server,
        });
    }
    /**
     * Get server definition
     * Get server definition
     * @param id Server ID
     * @returns ServerDefinition OK
     * @throws ApiError
     */
    public static getApiServersDefinition(
        id: string,
    ): CancelablePromise<ServerDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/definition',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update server definition
     * Updates a server definition
     * @param id Server ID
     * @param server Server definition
     * @returns void
     * @throws ApiError
     */
    public static putApiServersDefinition(
        id: string,
        server: NamedServer,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}/definition',
            path: {
                'id': id,
            },
            body: server,
        });
    }
    /**
     * Edit server definition
     * Updates the server with a new definition
     * @param id Server ID
     * @param server New definition
     * @returns void
     * @throws ApiError
     */
    public static postApiServersDefinition(
        id: string,
        server: ServerDefinition,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/definition',
            path: {
                'id': id,
            },
            body: server,
        });
    }
    /**
     * Extract archive
     * Extracts an archive to the server
     * @param id Server ID
     * @param filename Target file to extract
     * @param destination Path to place files
     * @returns void
     * @throws ApiError
     */
    public static postApiServersExtract(
        id: string,
        filename: string,
        destination: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/extract/{filename}',
            path: {
                'id': id,
                'filename': filename,
            },
            query: {
                'destination': destination,
            },
        });
    }
    /**
     * Get file/folder
     * Gets a specific file or a list of files in a folder. This will either return
     * a) A raw file if the path points to a valid file
     * or b) An array of files for the folder contents
     * @param id Server ID
     * @param filepath File path
     * @returns any OK
     * @throws ApiError
     */
    public static getApiServersFile(
        id: string,
        filepath: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/file/{filepath}',
            path: {
                'id': id,
                'filepath': filepath,
            },
        });
    }
    /**
     * Edit file
     * Adds or edit a file, replacing the contents with the provided body
     * @param id Server ID
     * @param filepath File path
     * @param file File contents
     * @returns void
     * @throws ApiError
     */
    public static putApiServersFile(
        id: string,
        filepath: string,
        file: Blob,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}/file/{filepath}',
            path: {
                'id': id,
                'filepath': filepath,
            },
            formData: {
                'file': file,
            },
        });
    }
    /**
     * Delete file
     * Deletes a file or folder.
     * WARNING: This is a recursive operation, specifying a folder will delete all children
     * @param id Server ID
     * @param filepath File path
     * @returns void
     * @throws ApiError
     */
    public static deleteApiServersFile(
        id: string,
        filepath: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/servers/{id}/file/{filepath}',
            path: {
                'id': id,
                'filepath': filepath,
            },
        });
    }
    /**
     * Get flags
     * Get the management flags for a server
     * @param id Server ID
     * @returns ServerFlags OK
     * @throws ApiError
     */
    public static getApiServersFlags(
        id: string,
    ): CancelablePromise<ServerFlags> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/flags',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Set flags
     * Sets management flags for a server
     * @param id Server ID
     * @param flags Flags to change
     * @returns void
     * @throws ApiError
     */
    public static postApiServersFlags(
        id: string,
        flags: ServerFlags,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/flags',
            path: {
                'id': id,
            },
            body: flags,
        });
    }
    /**
     * Install server
     * Install server
     * @param id Server ID
     * @returns any Accepted
     * @throws ApiError
     */
    public static postApiServersInstall(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/install',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Kill server
     * Kill server
     * @param id Server ID
     * @returns void
     * @throws ApiError
     */
    public static postApiServersKill(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/kill',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Rename server
     * Renames a server
     * @param id Server ID
     * @param name New server name
     * @returns void
     * @throws ApiError
     */
    public static putApiServersName(
        id: string,
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}/name/{name}',
            path: {
                'id': id,
                'name': name,
            },
        });
    }
    /**
     * Queries the server for game-specific stats
     * Queries the server using the server's protocol to gather information such as players.
     * @param id Server ID
     * @returns any OK
     * @throws ApiError
     */
    public static getApiServersQuery(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/query',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Determine if the server supports query protocol
     * Returns a 202 if the server can be queried, otherwise 204
     * @param id Server ID
     * @returns any Accepted
     * @throws ApiError
     */
    public static headApiServersQuery(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/servers/{id}/query',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Reload server
     * Reload server
     * @param id Server ID
     * @returns void
     * @throws ApiError
     */
    public static postApiServersReload(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/reload',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Start server
     * Start server
     * @param id Server ID
     * @returns any Accepted
     * @throws ApiError
     */
    public static postApiServersStart(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/start',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get stats
     * Gets the CPU and memory usage of the server
     * @param id Server ID
     * @returns ServerStats OK
     * @throws ApiError
     */
    public static getApiServersStats(
        id: string,
    ): CancelablePromise<ServerStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/stats',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get status
     * Get the server's status (is it running)
     * @param id Server ID
     * @returns ServerRunning OK
     * @throws ApiError
     */
    public static getApiServersStatus(
        id: string,
    ): CancelablePromise<ServerRunning> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/status',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Stop server
     * Stop server
     * @param id Server ID
     * @returns any Accepted
     * @throws ApiError
     */
    public static postApiServersStop(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/stop',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get server tasks
     * Get server tasks
     * @param id Server ID
     * @returns ServerTasks OK
     * @throws ApiError
     */
    public static getApiServersTasks(
        id: string,
    ): CancelablePromise<ServerTasks> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/tasks',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get server task
     * Get server task by id
     * @param id Server ID
     * @param taskId Task ID
     * @returns ServerTask OK
     * @throws ApiError
     */
    public static getApiServersTasks1(
        id: string,
        taskId: string,
    ): CancelablePromise<ServerTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/tasks/{taskId}',
            path: {
                'id': id,
                'taskId': taskId,
            },
        });
    }
    /**
     * Edit server task
     * Edit server task by id
     * @param id Server ID
     * @param taskId Task ID
     * @param task Task definition
     * @returns void
     * @throws ApiError
     */
    public static putApiServersTasks(
        id: string,
        taskId: string,
        task: Task,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}/tasks/{taskId}',
            path: {
                'id': id,
                'taskId': taskId,
            },
            body: task,
        });
    }
    /**
     * Delete server task
     * Delete server task by id
     * @param id Server ID
     * @param taskId Task ID
     * @returns void
     * @throws ApiError
     */
    public static deleteApiServersTasks(
        id: string,
        taskId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/servers/{id}/tasks/{taskId}',
            path: {
                'id': id,
                'taskId': taskId,
            },
        });
    }
    /**
     * Run server task
     * Run a specific task
     * @param id Server ID
     * @param taskId Task ID
     * @returns void
     * @throws ApiError
     */
    public static postApiServersTasksRun(
        id: string,
        taskId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/{id}/tasks/{taskId}/run',
            path: {
                'id': id,
                'taskId': taskId,
            },
        });
    }
    /**
     * Gets all users for a server
     * @param id Server ID
     * @returns models_UserPermissionsView OK
     * @throws ApiError
     */
    public static getApiServersUser(
        id: string,
    ): CancelablePromise<Array<models_UserPermissionsView>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/user',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Gets all users for a server
     * @param id Server ID
     * @param email Email
     * @returns models_UserPermissionsView OK
     * @throws ApiError
     */
    public static getApiServersUser1(
        id: string,
        email: string,
    ): CancelablePromise<Array<models_UserPermissionsView>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}/user/{email}',
            path: {
                'id': id,
                'email': email,
            },
        });
    }
    /**
     * Edits access to a server
     * @param id Server ID
     * @param email Email of user
     * @param permissions New permissions to apply
     * @returns void
     * @throws ApiError
     */
    public static putApiServersUsers(
        id: string,
        email: string,
        permissions: Permissions,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}/users/{email}',
            path: {
                'id': id,
                'email': email,
            },
            body: permissions,
        });
    }
    /**
     * Removes access to a server
     * @param id Server ID
     * @param email Email of user
     * @returns void
     * @throws ApiError
     */
    public static deleteApiServersUsers(
        id: string,
        email: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/servers/{id}/users/{email}',
            path: {
                'id': id,
                'email': email,
            },
        });
    }
    /**
     * Update multiple panel setting
     * Updates multiple panel settings at once
     * @param data Config data to apply
     * @returns void
     * @throws ApiError
     */
    public static postApiSettings(
        data: ChangeMultipleSettings,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/settings',
            body: data,
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Value a panel setting
     * Gets the value currently being used for the specified config key
     * @param key The config key
     * @returns Setting OK
     * @throws ApiError
     */
    public static getApiSettings(
        key: string,
    ): CancelablePromise<Setting> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/settings/{key}',
            path: {
                'key': key,
            },
        });
    }
    /**
     * Update a panel setting
     * Updates the value of a panel setting
     * @param key The config key
     * @param value The new value for the setting
     * @returns void
     * @throws ApiError
     */
    public static putApiSettings(
        key: string,
        value: Setting,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/settings/{key}',
            path: {
                'key': key,
            },
            body: value,
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get all repos
     * Gets all repos that are available to pull template from
     * @returns TemplateRepo OK
     * @throws ApiError
     */
    public static getApiTemplates(): CancelablePromise<Array<TemplateRepo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/templates',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Add repo
     * Adds a new repo to the service
     * @param repo Repo information
     * @returns TemplateRepo OK
     * @throws ApiError
     */
    public static postApiTemplates(
        repo: TemplateRepo,
    ): CancelablePromise<TemplateRepo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/templates',
            body: repo,
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Adds or updates a template
     * @param template Template
     * @param name Template name
     * @returns void
     * @throws ApiError
     */
    public static putApiTemplatesLocal(
        template: ServerDefinition,
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/templates/local/{name}',
            path: {
                'name': name,
            },
            body: template,
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Deletes template
     * Deletes template
     * @param name Template name
     * @returns void
     * @throws ApiError
     */
    public static deleteApiTemplatesLocal(
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/templates/local/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get all templates from repo
     * Gets all templates from a repository
     * @param repo Repo id
     * @returns Template OK
     * @throws ApiError
     */
    public static getApiTemplates1(
        repo: number,
    ): CancelablePromise<Array<Template>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/templates/{repo}',
            path: {
                'repo': repo,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Delete repo
     * Deletes a repo from the service
     * @param repo Repo Id
     * @returns void
     * @throws ApiError
     */
    public static deleteApiTemplates(
        repo: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/templates/{repo}',
            path: {
                'repo': repo,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get template
     * Gets a template from the repo
     * @param repo Repo Id
     * @param template Template name
     * @returns Template OK
     * @throws ApiError
     */
    public static getApiTemplates2(
        repo: number,
        template: string,
    ): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/templates/{repo}/{template}',
            path: {
                'repo': repo,
                'template': template,
            },
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get users
     * Gets users, and allowing for filtering of users. * is a wildcard that can be used for text inputs
     * @param body Filters to search on
     * @returns UserSearchResponse OK
     * @throws ApiError
     */
    public static getApiUsers(
        body: UserSearch,
    ): CancelablePromise<UserSearchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            body: body,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Create user
     * @param body New user information
     * @returns User OK
     * @throws ApiError
     */
    public static postApiUsers(
        body: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users',
            body: body,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get a user
     * @param id User ID
     * @returns User OK
     * @throws ApiError
     */
    public static getApiUsers1(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Update user
     * @param id User ID
     * @param body New user information
     * @returns void
     * @throws ApiError
     */
    public static postApiUsers1(
        id: number,
        body: User,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Delete user
     * @param id User ID
     * @returns void
     * @throws ApiError
     */
    public static deleteApiUsers(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Gets user permissions
     * @param id User ID
     * @returns Permissions OK
     * @throws ApiError
     */
    public static getApiUsersPerms(
        id: number,
    ): CancelablePromise<Permissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}/perms',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Sets user permissions
     * @param id User ID
     * @param body New permissions
     * @returns void
     * @throws ApiError
     */
    public static putApiUsersPerms(
        id: number,
        body: Permissions,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}/perms',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get a user setting
     * Gets all settings specific to the current user
     * @returns UserSettings OK
     * @throws ApiError
     */
    public static getApiUsersettings(): CancelablePromise<Array<UserSettings>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/usersettings',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Update a user setting
     * Updates the value of a user setting
     * @param key The config key
     * @param value The new value for the setting
     * @returns void
     * @throws ApiError
     */
    public static putApiUsersettings(
        key: string,
        value: UserSetting,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/usersettings/{key}',
            path: {
                'key': key,
            },
            body: value,
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Check daemon status
     * Check to see if the daemon is online or not
     * @returns DaemonRunning OK
     * @throws ApiError
     */
    public static getDaemon(): CancelablePromise<DaemonRunning> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/daemon',
        });
    }
    /**
     * Check daemon status
     * Check to see if the daemon is online or not
     * @returns void
     * @throws ApiError
     */
    public static headDaemon(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/daemon',
        });
    }
    /**
     * Get features of the node
     * Gets the features that the node supports, like it's OS and environments
     * @returns Features OK
     * @throws ApiError
     */
    public static getDaemonFeatures(): CancelablePromise<Features> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/daemon/features',
        });
    }
    /**
     * Authenticate
     * Get a OAuth2 token to consume this API
     * @param request OAuth2 token request
     * @returns OAuth2TokenResponse OK
     * @throws ApiError
     */
    public static postOauth2Token(
        request: OAuth2TokenRequest,
    ): CancelablePromise<OAuth2TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth2/token',
            body: request,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
}
