"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow
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
exports.Workflow = exports.WorkflowLimitsOutputReference = exports.WorkflowInstancesOutputReference = void 0;
exports.workflowInstancesToTerraform = workflowInstancesToTerraform;
exports.workflowInstancesToHclTerraform = workflowInstancesToHclTerraform;
exports.workflowLimitsToTerraform = workflowLimitsToTerraform;
exports.workflowLimitsToHclTerraform = workflowLimitsToHclTerraform;
var cdktf = require("cdktf");
function workflowInstancesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workflowInstancesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkflowInstancesOutputReference = /** @class */ (function (_super) {
    __extends(WorkflowInstancesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkflowInstancesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "complete", {
        // complete - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "errored", {
        // errored - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('errored');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "queued", {
        // queued - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('queued');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "running", {
        // running - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('running');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "terminated", {
        // terminated - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('terminated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "waiting", {
        // waiting - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('waiting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowInstancesOutputReference.prototype, "waitingForPause", {
        // waiting_for_pause - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('waiting_for_pause');
        },
        enumerable: false,
        configurable: true
    });
    return WorkflowInstancesOutputReference;
}(cdktf.ComplexObject));
exports.WorkflowInstancesOutputReference = WorkflowInstancesOutputReference;
function workflowLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        steps: cdktf.numberToTerraform(struct.steps),
    };
}
function workflowLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        steps: {
            value: cdktf.numberToHclTerraform(struct.steps),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkflowLimitsOutputReference = /** @class */ (function (_super) {
    __extends(WorkflowLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkflowLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkflowLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._steps !== undefined) {
                hasAnyValues = true;
                internalValueResult.steps = this._steps;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._steps = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._steps = value.steps;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkflowLimitsOutputReference.prototype, "steps", {
        get: function () {
            return this.getNumberAttribute('steps');
        },
        set: function (value) {
            this._steps = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkflowLimitsOutputReference.prototype.resetSteps = function () {
        this._steps = undefined;
    };
    Object.defineProperty(WorkflowLimitsOutputReference.prototype, "stepsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._steps;
        },
        enumerable: false,
        configurable: true
    });
    return WorkflowLimitsOutputReference;
}(cdktf.ComplexObject));
exports.WorkflowLimitsOutputReference = WorkflowLimitsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow cloudflare_workflow}
*/
var Workflow = /** @class */ (function (_super) {
    __extends(Workflow, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow cloudflare_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkflowConfig
    */
    function Workflow(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workflow',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // instances - computed: true, optional: false, required: false
        _this._instances = new WorkflowInstancesOutputReference(_this, "instances");
        // limits - computed: false, optional: true, required: false
        _this._limits = new WorkflowLimitsOutputReference(_this, "limits");
        _this._accountId = config.accountId;
        _this._className = config.className;
        _this._limits.internalValue = config.limits;
        _this._scriptName = config.scriptName;
        _this._workflowName = config.workflowName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Workflow to import
    * @param importFromId The id of the existing Workflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Workflow to import is found
    */
    Workflow.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workflow", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Workflow.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Workflow.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Workflow.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "className", {
        get: function () {
            return this.getStringAttribute('class_name');
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "classNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "instances", {
        get: function () {
            return this._instances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "isDeleted", {
        // is_deleted - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('is_deleted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Workflow.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    Workflow.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(Workflow.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "terminatorRunning", {
        // terminator_running - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('terminator_running');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "triggeredOn", {
        // triggered_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('triggered_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "workflowName", {
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        set: function (value) {
            this._workflowName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "workflowNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workflowName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Workflow.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            class_name: cdktf.stringToTerraform(this._className),
            limits: workflowLimitsToTerraform(this._limits.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
            workflow_name: cdktf.stringToTerraform(this._workflowName),
        };
    };
    Workflow.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            class_name: {
                value: cdktf.stringToHclTerraform(this._className),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            limits: {
                value: workflowLimitsToHclTerraform(this._limits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkflowLimits",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workflow_name: {
                value: cdktf.stringToHclTerraform(this._workflowName),
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
    Workflow.tfResourceType = "cloudflare_workflow";
    return Workflow;
}(cdktf.TerraformResource));
exports.Workflow = Workflow;
