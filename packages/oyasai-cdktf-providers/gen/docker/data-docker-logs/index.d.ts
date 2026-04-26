import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerLogsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#details DataDockerLogs#details}
    */
    readonly details?: boolean | cdktf.IResolvable;
    /**
    * Discard headers that docker appends to each log entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}
    */
    readonly discardHeaders?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#follow DataDockerLogs#follow}
    */
    readonly follow?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#id DataDockerLogs#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If true populate computed value `logs_list_string`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}
    */
    readonly logsListStringEnabled?: boolean | cdktf.IResolvable;
    /**
    * The name of the Docker Container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#name DataDockerLogs#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}
    */
    readonly showStderr?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}
    */
    readonly showStdout?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#since DataDockerLogs#since}
    */
    readonly since?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#tail DataDockerLogs#tail}
    */
    readonly tail?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}
    */
    readonly timestamps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#until DataDockerLogs#until}
    */
    readonly until?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs docker_logs}
*/
export declare class DataDockerLogs extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_logs";
    /**
    * Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerLogs to import
    * @param importFromId The id of the existing DataDockerLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerLogs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs docker_logs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerLogsConfig
    */
    constructor(scope: Construct, id: string, config: DataDockerLogsConfig);
    private _details?;
    get details(): boolean | cdktf.IResolvable;
    set details(value: boolean | cdktf.IResolvable);
    resetDetails(): void;
    get detailsInput(): any;
    private _discardHeaders?;
    get discardHeaders(): boolean | cdktf.IResolvable;
    set discardHeaders(value: boolean | cdktf.IResolvable);
    resetDiscardHeaders(): void;
    get discardHeadersInput(): any;
    private _follow?;
    get follow(): boolean | cdktf.IResolvable;
    set follow(value: boolean | cdktf.IResolvable);
    resetFollow(): void;
    get followInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get logsListString(): any;
    private _logsListStringEnabled?;
    get logsListStringEnabled(): boolean | cdktf.IResolvable;
    set logsListStringEnabled(value: boolean | cdktf.IResolvable);
    resetLogsListStringEnabled(): void;
    get logsListStringEnabledInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _showStderr?;
    get showStderr(): boolean | cdktf.IResolvable;
    set showStderr(value: boolean | cdktf.IResolvable);
    resetShowStderr(): void;
    get showStderrInput(): any;
    private _showStdout?;
    get showStdout(): boolean | cdktf.IResolvable;
    set showStdout(value: boolean | cdktf.IResolvable);
    resetShowStdout(): void;
    get showStdoutInput(): any;
    private _since?;
    get since(): string;
    set since(value: string);
    resetSince(): void;
    get sinceInput(): string;
    private _tail?;
    get tail(): string;
    set tail(value: string);
    resetTail(): void;
    get tailInput(): string;
    private _timestamps?;
    get timestamps(): boolean | cdktf.IResolvable;
    set timestamps(value: boolean | cdktf.IResolvable);
    resetTimestamps(): void;
    get timestampsInput(): any;
    private _until?;
    get until(): string;
    set until(value: string);
    resetUntil(): void;
    get untilInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
