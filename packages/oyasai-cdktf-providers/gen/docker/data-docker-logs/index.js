"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDockerLogs = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/logs docker_logs}
*/
var DataDockerLogs = /** @class */ (function (_super) {
    __extends(DataDockerLogs, _super);
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
    function DataDockerLogs(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        _this._details = config.details;
        _this._discardHeaders = config.discardHeaders;
        _this._follow = config.follow;
        _this._id = config.id;
        _this._logsListStringEnabled = config.logsListStringEnabled;
        _this._name = config.name;
        _this._showStderr = config.showStderr;
        _this._showStdout = config.showStdout;
        _this._since = config.since;
        _this._tail = config.tail;
        _this._timestamps = config.timestamps;
        _this._until = config.until;
        return _this;
    }
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
    DataDockerLogs.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_logs", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerLogs.prototype, "details", {
        get: function () {
            return this.getBooleanAttribute('details');
        },
        set: function (value) {
            this._details = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetDetails = function () {
        this._details = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "detailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._details;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "discardHeaders", {
        get: function () {
            return this.getBooleanAttribute('discard_headers');
        },
        set: function (value) {
            this._discardHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetDiscardHeaders = function () {
        this._discardHeaders = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "discardHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._discardHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "follow", {
        get: function () {
            return this.getBooleanAttribute('follow');
        },
        set: function (value) {
            this._follow = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetFollow = function () {
        this._follow = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "followInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._follow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "logsListString", {
        // logs_list_string - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('logs_list_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "logsListStringEnabled", {
        get: function () {
            return this.getBooleanAttribute('logs_list_string_enabled');
        },
        set: function (value) {
            this._logsListStringEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetLogsListStringEnabled = function () {
        this._logsListStringEnabled = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "logsListStringEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logsListStringEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "showStderr", {
        get: function () {
            return this.getBooleanAttribute('show_stderr');
        },
        set: function (value) {
            this._showStderr = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetShowStderr = function () {
        this._showStderr = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "showStderrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._showStderr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "showStdout", {
        get: function () {
            return this.getBooleanAttribute('show_stdout');
        },
        set: function (value) {
            this._showStdout = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetShowStdout = function () {
        this._showStdout = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "showStdoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._showStdout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "since", {
        get: function () {
            return this.getStringAttribute('since');
        },
        set: function (value) {
            this._since = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetSince = function () {
        this._since = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "sinceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._since;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "tail", {
        get: function () {
            return this.getStringAttribute('tail');
        },
        set: function (value) {
            this._tail = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetTail = function () {
        this._tail = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "tailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "timestamps", {
        get: function () {
            return this.getBooleanAttribute('timestamps');
        },
        set: function (value) {
            this._timestamps = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetTimestamps = function () {
        this._timestamps = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "timestampsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timestamps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerLogs.prototype, "until", {
        get: function () {
            return this.getStringAttribute('until');
        },
        set: function (value) {
            this._until = value;
        },
        enumerable: false,
        configurable: true
    });
    DataDockerLogs.prototype.resetUntil = function () {
        this._until = undefined;
    };
    Object.defineProperty(DataDockerLogs.prototype, "untilInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._until;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerLogs.prototype.synthesizeAttributes = function () {
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
    };
    DataDockerLogs.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataDockerLogs.tfResourceType = "docker_logs";
    return DataDockerLogs;
}(cdktf.TerraformDataSource));
exports.DataDockerLogs = DataDockerLogs;
