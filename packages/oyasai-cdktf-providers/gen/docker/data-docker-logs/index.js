// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs docker_logs}
*/
export class DataDockerLogs extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_logs";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerLogs to import
    * @param importFromId The id of the existing DataDockerLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerLogs to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_logs", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs docker_logs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerLogsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_logs',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._details = config.details;
        this._discardHeaders = config.discardHeaders;
        this._follow = config.follow;
        this._id = config.id;
        this._logsListStringEnabled = config.logsListStringEnabled;
        this._name = config.name;
        this._showStderr = config.showStderr;
        this._showStdout = config.showStdout;
        this._since = config.since;
        this._tail = config.tail;
        this._timestamps = config.timestamps;
        this._until = config.until;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // details - computed: false, optional: true, required: false
    _details;
    get details() {
        return this.getBooleanAttribute('details');
    }
    set details(value) {
        this._details = value;
    }
    resetDetails() {
        this._details = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get detailsInput() {
        return this._details;
    }
    // discard_headers - computed: false, optional: true, required: false
    _discardHeaders;
    get discardHeaders() {
        return this.getBooleanAttribute('discard_headers');
    }
    set discardHeaders(value) {
        this._discardHeaders = value;
    }
    resetDiscardHeaders() {
        this._discardHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get discardHeadersInput() {
        return this._discardHeaders;
    }
    // follow - computed: false, optional: true, required: false
    _follow;
    get follow() {
        return this.getBooleanAttribute('follow');
    }
    set follow(value) {
        this._follow = value;
    }
    resetFollow() {
        this._follow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get followInput() {
        return this._follow;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // logs_list_string - computed: true, optional: false, required: false
    get logsListString() {
        return this.getListAttribute('logs_list_string');
    }
    // logs_list_string_enabled - computed: false, optional: true, required: false
    _logsListStringEnabled;
    get logsListStringEnabled() {
        return this.getBooleanAttribute('logs_list_string_enabled');
    }
    set logsListStringEnabled(value) {
        this._logsListStringEnabled = value;
    }
    resetLogsListStringEnabled() {
        this._logsListStringEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logsListStringEnabledInput() {
        return this._logsListStringEnabled;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // show_stderr - computed: false, optional: true, required: false
    _showStderr;
    get showStderr() {
        return this.getBooleanAttribute('show_stderr');
    }
    set showStderr(value) {
        this._showStderr = value;
    }
    resetShowStderr() {
        this._showStderr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get showStderrInput() {
        return this._showStderr;
    }
    // show_stdout - computed: false, optional: true, required: false
    _showStdout;
    get showStdout() {
        return this.getBooleanAttribute('show_stdout');
    }
    set showStdout(value) {
        this._showStdout = value;
    }
    resetShowStdout() {
        this._showStdout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get showStdoutInput() {
        return this._showStdout;
    }
    // since - computed: false, optional: true, required: false
    _since;
    get since() {
        return this.getStringAttribute('since');
    }
    set since(value) {
        this._since = value;
    }
    resetSince() {
        this._since = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sinceInput() {
        return this._since;
    }
    // tail - computed: false, optional: true, required: false
    _tail;
    get tail() {
        return this.getStringAttribute('tail');
    }
    set tail(value) {
        this._tail = value;
    }
    resetTail() {
        this._tail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tailInput() {
        return this._tail;
    }
    // timestamps - computed: false, optional: true, required: false
    _timestamps;
    get timestamps() {
        return this.getBooleanAttribute('timestamps');
    }
    set timestamps(value) {
        this._timestamps = value;
    }
    resetTimestamps() {
        this._timestamps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampsInput() {
        return this._timestamps;
    }
    // until - computed: false, optional: true, required: false
    _until;
    get until() {
        return this.getStringAttribute('until');
    }
    set until(value) {
        this._until = value;
    }
    resetUntil() {
        this._until = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get untilInput() {
        return this._until;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            details: cdktf.booleanToTerraform(this._details),
            discard_headers: cdktf.booleanToTerraform(this._discardHeaders),
            follow: cdktf.booleanToTerraform(this._follow),
            id: cdktf.stringToTerraform(this._id),
            logs_list_string_enabled: cdktf.booleanToTerraform(this._logsListStringEnabled),
            name: cdktf.stringToTerraform(this._name),
            show_stderr: cdktf.booleanToTerraform(this._showStderr),
            show_stdout: cdktf.booleanToTerraform(this._showStdout),
            since: cdktf.stringToTerraform(this._since),
            tail: cdktf.stringToTerraform(this._tail),
            timestamps: cdktf.booleanToTerraform(this._timestamps),
            until: cdktf.stringToTerraform(this._until),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            details: {
                value: cdktf.booleanToHclTerraform(this._details),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            discard_headers: {
                value: cdktf.booleanToHclTerraform(this._discardHeaders),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            follow: {
                value: cdktf.booleanToHclTerraform(this._follow),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logs_list_string_enabled: {
                value: cdktf.booleanToHclTerraform(this._logsListStringEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            show_stderr: {
                value: cdktf.booleanToHclTerraform(this._showStderr),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            show_stdout: {
                value: cdktf.booleanToHclTerraform(this._showStdout),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            since: {
                value: cdktf.stringToHclTerraform(this._since),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tail: {
                value: cdktf.stringToHclTerraform(this._tail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timestamps: {
                value: cdktf.booleanToHclTerraform(this._timestamps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            until: {
                value: cdktf.stringToHclTerraform(this._until),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
