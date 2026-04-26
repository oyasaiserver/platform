"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner
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
exports.ActionsHostedRunner = exports.ActionsHostedRunnerTimeoutsOutputReference = exports.ActionsHostedRunnerImageOutputReference = exports.ActionsHostedRunnerPublicIpsList = exports.ActionsHostedRunnerPublicIpsOutputReference = exports.ActionsHostedRunnerMachineSizeDetailsList = exports.ActionsHostedRunnerMachineSizeDetailsOutputReference = void 0;
exports.actionsHostedRunnerMachineSizeDetailsToTerraform = actionsHostedRunnerMachineSizeDetailsToTerraform;
exports.actionsHostedRunnerMachineSizeDetailsToHclTerraform = actionsHostedRunnerMachineSizeDetailsToHclTerraform;
exports.actionsHostedRunnerPublicIpsToTerraform = actionsHostedRunnerPublicIpsToTerraform;
exports.actionsHostedRunnerPublicIpsToHclTerraform = actionsHostedRunnerPublicIpsToHclTerraform;
exports.actionsHostedRunnerImageToTerraform = actionsHostedRunnerImageToTerraform;
exports.actionsHostedRunnerImageToHclTerraform = actionsHostedRunnerImageToHclTerraform;
exports.actionsHostedRunnerTimeoutsToTerraform = actionsHostedRunnerTimeoutsToTerraform;
exports.actionsHostedRunnerTimeoutsToHclTerraform = actionsHostedRunnerTimeoutsToHclTerraform;
var cdktf = require("cdktf");
function actionsHostedRunnerMachineSizeDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function actionsHostedRunnerMachineSizeDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ActionsHostedRunnerMachineSizeDetailsOutputReference = /** @class */ (function (_super) {
    __extends(ActionsHostedRunnerMachineSizeDetailsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ActionsHostedRunnerMachineSizeDetailsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsHostedRunnerMachineSizeDetailsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ActionsHostedRunnerMachineSizeDetailsOutputReference.prototype, "cpuCores", {
        // cpu_cores - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_cores');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerMachineSizeDetailsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerMachineSizeDetailsOutputReference.prototype, "memoryGb", {
        // memory_gb - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('memory_gb');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerMachineSizeDetailsOutputReference.prototype, "storageGb", {
        // storage_gb - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('storage_gb');
        },
        enumerable: false,
        configurable: true
    });
    return ActionsHostedRunnerMachineSizeDetailsOutputReference;
}(cdktf.ComplexObject));
exports.ActionsHostedRunnerMachineSizeDetailsOutputReference = ActionsHostedRunnerMachineSizeDetailsOutputReference;
var ActionsHostedRunnerMachineSizeDetailsList = /** @class */ (function (_super) {
    __extends(ActionsHostedRunnerMachineSizeDetailsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ActionsHostedRunnerMachineSizeDetailsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ActionsHostedRunnerMachineSizeDetailsList.prototype.get = function (index) {
        return new ActionsHostedRunnerMachineSizeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ActionsHostedRunnerMachineSizeDetailsList;
}(cdktf.ComplexList));
exports.ActionsHostedRunnerMachineSizeDetailsList = ActionsHostedRunnerMachineSizeDetailsList;
function actionsHostedRunnerPublicIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function actionsHostedRunnerPublicIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ActionsHostedRunnerPublicIpsOutputReference = /** @class */ (function (_super) {
    __extends(ActionsHostedRunnerPublicIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ActionsHostedRunnerPublicIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsHostedRunnerPublicIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ActionsHostedRunnerPublicIpsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerPublicIpsOutputReference.prototype, "length", {
        // length - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('length');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerPublicIpsOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return ActionsHostedRunnerPublicIpsOutputReference;
}(cdktf.ComplexObject));
exports.ActionsHostedRunnerPublicIpsOutputReference = ActionsHostedRunnerPublicIpsOutputReference;
var ActionsHostedRunnerPublicIpsList = /** @class */ (function (_super) {
    __extends(ActionsHostedRunnerPublicIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ActionsHostedRunnerPublicIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ActionsHostedRunnerPublicIpsList.prototype.get = function (index) {
        return new ActionsHostedRunnerPublicIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ActionsHostedRunnerPublicIpsList;
}(cdktf.ComplexList));
exports.ActionsHostedRunnerPublicIpsList = ActionsHostedRunnerPublicIpsList;
function actionsHostedRunnerImageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        source: cdktf.stringToTerraform(struct.source),
    };
}
function actionsHostedRunnerImageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
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
var ActionsHostedRunnerImageOutputReference = /** @class */ (function (_super) {
    __extends(ActionsHostedRunnerImageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ActionsHostedRunnerImageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsHostedRunnerImageOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._id = undefined;
                this._source = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._id = value.id;
                this._source = value.source;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerImageOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerImageOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerImageOutputReference.prototype, "sizeGb", {
        // size_gb - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size_gb');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerImageOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunnerImageOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(ActionsHostedRunnerImageOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return ActionsHostedRunnerImageOutputReference;
}(cdktf.ComplexObject));
exports.ActionsHostedRunnerImageOutputReference = ActionsHostedRunnerImageOutputReference;
function actionsHostedRunnerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
function actionsHostedRunnerTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
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
var ActionsHostedRunnerTimeoutsOutputReference = /** @class */ (function (_super) {
    __extends(ActionsHostedRunnerTimeoutsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ActionsHostedRunnerTimeoutsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsHostedRunnerTimeoutsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._delete !== undefined) {
                hasAnyValues = true;
                internalValueResult.delete = this._delete;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._delete = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._delete = value.delete;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunnerTimeoutsOutputReference.prototype, "delete", {
        get: function () {
            return this.getStringAttribute('delete');
        },
        set: function (value) {
            this._delete = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunnerTimeoutsOutputReference.prototype.resetDelete = function () {
        this._delete = undefined;
    };
    Object.defineProperty(ActionsHostedRunnerTimeoutsOutputReference.prototype, "deleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delete;
        },
        enumerable: false,
        configurable: true
    });
    return ActionsHostedRunnerTimeoutsOutputReference;
}(cdktf.ComplexObject));
exports.ActionsHostedRunnerTimeoutsOutputReference = ActionsHostedRunnerTimeoutsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}
*/
var ActionsHostedRunner = /** @class */ (function (_super) {
    __extends(ActionsHostedRunner, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner github_actions_hosted_runner} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsHostedRunnerConfig
    */
    function ActionsHostedRunner(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_hosted_runner',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // machine_size_details - computed: true, optional: false, required: false
        _this._machineSizeDetails = new ActionsHostedRunnerMachineSizeDetailsList(_this, "machine_size_details", false);
        // public_ips - computed: true, optional: false, required: false
        _this._publicIps = new ActionsHostedRunnerPublicIpsList(_this, "public_ips", false);
        // image - computed: false, optional: false, required: true
        _this._image = new ActionsHostedRunnerImageOutputReference(_this, "image");
        // timeouts - computed: false, optional: true, required: false
        _this._timeouts = new ActionsHostedRunnerTimeoutsOutputReference(_this, "timeouts");
        _this._imageGen = config.imageGen;
        _this._imageVersion = config.imageVersion;
        _this._maximumRunners = config.maximumRunners;
        _this._name = config.name;
        _this._publicIpEnabled = config.publicIpEnabled;
        _this._runnerGroupId = config.runnerGroupId;
        _this._size = config.size;
        _this._image.internalValue = config.image;
        _this._timeouts.internalValue = config.timeouts;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsHostedRunner to import
    * @param importFromId The id of the existing ActionsHostedRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsHostedRunner to import is found
    */
    ActionsHostedRunner.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_hosted_runner", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "imageGen", {
        get: function () {
            return this.getBooleanAttribute('image_gen');
        },
        set: function (value) {
            this._imageGen = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunner.prototype.resetImageGen = function () {
        this._imageGen = undefined;
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "imageGenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageGen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "imageVersion", {
        get: function () {
            return this.getStringAttribute('image_version');
        },
        set: function (value) {
            this._imageVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunner.prototype.resetImageVersion = function () {
        this._imageVersion = undefined;
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "imageVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "lastActiveOn", {
        // last_active_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_active_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "machineSizeDetails", {
        get: function () {
            return this._machineSizeDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "maximumRunners", {
        get: function () {
            return this.getNumberAttribute('maximum_runners');
        },
        set: function (value) {
            this._maximumRunners = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunner.prototype.resetMaximumRunners = function () {
        this._maximumRunners = undefined;
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "maximumRunnersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumRunners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "publicIpEnabled", {
        get: function () {
            return this.getBooleanAttribute('public_ip_enabled');
        },
        set: function (value) {
            this._publicIpEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunner.prototype.resetPublicIpEnabled = function () {
        this._publicIpEnabled = undefined;
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "publicIpEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicIpEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "publicIps", {
        get: function () {
            return this._publicIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "runnerGroupId", {
        get: function () {
            return this.getNumberAttribute('runner_group_id');
        },
        set: function (value) {
            this._runnerGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "runnerGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runnerGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "size", {
        get: function () {
            return this.getStringAttribute('size');
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "sizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunner.prototype.putImage = function (value) {
        this._image.internalValue = value;
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "imageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._image.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsHostedRunner.prototype, "timeouts", {
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    ActionsHostedRunner.prototype.putTimeouts = function (value) {
        this._timeouts.internalValue = value;
    };
    ActionsHostedRunner.prototype.resetTimeouts = function () {
        this._timeouts.internalValue = undefined;
    };
    Object.defineProperty(ActionsHostedRunner.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsHostedRunner.prototype.synthesizeAttributes = function () {
        return {
            image_gen: cdktf.booleanToTerraform(this._imageGen),
            image_version: cdktf.stringToTerraform(this._imageVersion),
            maximum_runners: cdktf.numberToTerraform(this._maximumRunners),
            name: cdktf.stringToTerraform(this._name),
            public_ip_enabled: cdktf.booleanToTerraform(this._publicIpEnabled),
            runner_group_id: cdktf.numberToTerraform(this._runnerGroupId),
            size: cdktf.stringToTerraform(this._size),
            image: actionsHostedRunnerImageToTerraform(this._image.internalValue),
            timeouts: actionsHostedRunnerTimeoutsToTerraform(this._timeouts.internalValue),
        };
    };
    ActionsHostedRunner.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            image_gen: {
                value: cdktf.booleanToHclTerraform(this._imageGen),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            image_version: {
                value: cdktf.stringToHclTerraform(this._imageVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maximum_runners: {
                value: cdktf.numberToHclTerraform(this._maximumRunners),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_ip_enabled: {
                value: cdktf.booleanToHclTerraform(this._publicIpEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            runner_group_id: {
                value: cdktf.numberToHclTerraform(this._runnerGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            size: {
                value: cdktf.stringToHclTerraform(this._size),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image: {
                value: actionsHostedRunnerImageToHclTerraform(this._image.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsHostedRunnerImageList",
            },
            timeouts: {
                value: actionsHostedRunnerTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ActionsHostedRunnerTimeouts",
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
    ActionsHostedRunner.tfResourceType = "github_actions_hosted_runner";
    return ActionsHostedRunner;
}(cdktf.TerraformResource));
exports.ActionsHostedRunner = ActionsHostedRunner;
