"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment
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
exports.WorkersDeployment = exports.WorkersDeploymentVersionsList = exports.WorkersDeploymentVersionsOutputReference = exports.WorkersDeploymentAnnotationsOutputReference = void 0;
exports.workersDeploymentAnnotationsToTerraform = workersDeploymentAnnotationsToTerraform;
exports.workersDeploymentAnnotationsToHclTerraform = workersDeploymentAnnotationsToHclTerraform;
exports.workersDeploymentVersionsToTerraform = workersDeploymentVersionsToTerraform;
exports.workersDeploymentVersionsToHclTerraform = workersDeploymentVersionsToHclTerraform;
var cdktf = require("cdktf");
function workersDeploymentAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        workers_message: cdktf.stringToTerraform(struct.workersMessage),
    };
}
function workersDeploymentAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        workers_message: {
            value: cdktf.stringToHclTerraform(struct.workersMessage),
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
}
var WorkersDeploymentAnnotationsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersDeploymentAnnotationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersDeploymentAnnotationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersDeploymentAnnotationsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._workersMessage !== undefined) {
                hasAnyValues = true;
                internalValueResult.workersMessage = this._workersMessage;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._workersMessage = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._workersMessage = value.workersMessage;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeploymentAnnotationsOutputReference.prototype, "workersMessage", {
        get: function () {
            return this.getStringAttribute('workers_message');
        },
        set: function (value) {
            this._workersMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersDeploymentAnnotationsOutputReference.prototype.resetWorkersMessage = function () {
        this._workersMessage = undefined;
    };
    Object.defineProperty(WorkersDeploymentAnnotationsOutputReference.prototype, "workersMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workersMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeploymentAnnotationsOutputReference.prototype, "workersTriggeredBy", {
        // workers_triggered_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_triggered_by');
        },
        enumerable: false,
        configurable: true
    });
    return WorkersDeploymentAnnotationsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersDeploymentAnnotationsOutputReference = WorkersDeploymentAnnotationsOutputReference;
function workersDeploymentVersionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        percentage: cdktf.numberToTerraform(struct.percentage),
        version_id: cdktf.stringToTerraform(struct.versionId),
    };
}
function workersDeploymentVersionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        percentage: {
            value: cdktf.numberToHclTerraform(struct.percentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        version_id: {
            value: cdktf.stringToHclTerraform(struct.versionId),
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
}
var WorkersDeploymentVersionsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersDeploymentVersionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersDeploymentVersionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersDeploymentVersionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._percentage !== undefined) {
                hasAnyValues = true;
                internalValueResult.percentage = this._percentage;
            }
            if (this._versionId !== undefined) {
                hasAnyValues = true;
                internalValueResult.versionId = this._versionId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._percentage = undefined;
                this._versionId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._percentage = value.percentage;
                this._versionId = value.versionId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeploymentVersionsOutputReference.prototype, "percentage", {
        get: function () {
            return this.getNumberAttribute('percentage');
        },
        set: function (value) {
            this._percentage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeploymentVersionsOutputReference.prototype, "percentageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._percentage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeploymentVersionsOutputReference.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeploymentVersionsOutputReference.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersDeploymentVersionsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersDeploymentVersionsOutputReference = WorkersDeploymentVersionsOutputReference;
var WorkersDeploymentVersionsList = /** @class */ (function (_super) {
    __extends(WorkersDeploymentVersionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersDeploymentVersionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersDeploymentVersionsList.prototype.get = function (index) {
        return new WorkersDeploymentVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersDeploymentVersionsList;
}(cdktf.ComplexList));
exports.WorkersDeploymentVersionsList = WorkersDeploymentVersionsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment cloudflare_workers_deployment}
*/
var WorkersDeployment = /** @class */ (function (_super) {
    __extends(WorkersDeployment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment cloudflare_workers_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersDeploymentConfig
    */
    function WorkersDeployment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_deployment',
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
        // annotations - computed: true, optional: true, required: false
        _this._annotations = new WorkersDeploymentAnnotationsOutputReference(_this, "annotations");
        // versions - computed: false, optional: false, required: true
        _this._versions = new WorkersDeploymentVersionsList(_this, "versions", false);
        _this._accountId = config.accountId;
        _this._annotations.internalValue = config.annotations;
        _this._scriptName = config.scriptName;
        _this._strategy = config.strategy;
        _this._versions.internalValue = config.versions;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersDeployment to import
    * @param importFromId The id of the existing WorkersDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersDeployment to import is found
    */
    WorkersDeployment.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_deployment", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkersDeployment.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersDeployment.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkersDeployment.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "annotations", {
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    WorkersDeployment.prototype.putAnnotations = function (value) {
        this._annotations.internalValue = value;
    };
    WorkersDeployment.prototype.resetAnnotations = function () {
        this._annotations.internalValue = undefined;
    };
    Object.defineProperty(WorkersDeployment.prototype, "annotationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._annotations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "authorEmail", {
        // author_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('author_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "strategy", {
        get: function () {
            return this.getStringAttribute('strategy');
        },
        set: function (value) {
            this._strategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "strategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersDeployment.prototype, "versions", {
        get: function () {
            return this._versions;
        },
        enumerable: false,
        configurable: true
    });
    WorkersDeployment.prototype.putVersions = function (value) {
        this._versions.internalValue = value;
    };
    Object.defineProperty(WorkersDeployment.prototype, "versionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkersDeployment.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            annotations: workersDeploymentAnnotationsToTerraform(this._annotations.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
            strategy: cdktf.stringToTerraform(this._strategy),
            versions: cdktf.listMapper(workersDeploymentVersionsToTerraform, false)(this._versions.internalValue),
        };
    };
    WorkersDeployment.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            annotations: {
                value: workersDeploymentAnnotationsToHclTerraform(this._annotations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersDeploymentAnnotations",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            strategy: {
                value: cdktf.stringToHclTerraform(this._strategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            versions: {
                value: cdktf.listMapperHcl(workersDeploymentVersionsToHclTerraform, false)(this._versions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkersDeploymentVersionsList",
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
    WorkersDeployment.tfResourceType = "cloudflare_workers_deployment";
    return WorkersDeployment;
}(cdktf.TerraformResource));
exports.WorkersDeployment = WorkersDeployment;
