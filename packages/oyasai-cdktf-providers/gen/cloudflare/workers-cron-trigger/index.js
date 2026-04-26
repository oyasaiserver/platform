"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger
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
exports.WorkersCronTrigger = exports.WorkersCronTriggerSchedulesList = exports.WorkersCronTriggerSchedulesOutputReference = void 0;
exports.workersCronTriggerSchedulesToTerraform = workersCronTriggerSchedulesToTerraform;
exports.workersCronTriggerSchedulesToHclTerraform = workersCronTriggerSchedulesToHclTerraform;
var cdktf = require("cdktf");
function workersCronTriggerSchedulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cron: cdktf.stringToTerraform(struct.cron),
    };
}
function workersCronTriggerSchedulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cron: {
            value: cdktf.stringToHclTerraform(struct.cron),
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
var WorkersCronTriggerSchedulesOutputReference = /** @class */ (function (_super) {
    __extends(WorkersCronTriggerSchedulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersCronTriggerSchedulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersCronTriggerSchedulesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cron !== undefined) {
                hasAnyValues = true;
                internalValueResult.cron = this._cron;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cron = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cron = value.cron;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTriggerSchedulesOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTriggerSchedulesOutputReference.prototype, "cron", {
        get: function () {
            return this.getStringAttribute('cron');
        },
        set: function (value) {
            this._cron = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTriggerSchedulesOutputReference.prototype, "cronInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cron;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTriggerSchedulesOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    return WorkersCronTriggerSchedulesOutputReference;
}(cdktf.ComplexObject));
exports.WorkersCronTriggerSchedulesOutputReference = WorkersCronTriggerSchedulesOutputReference;
var WorkersCronTriggerSchedulesList = /** @class */ (function (_super) {
    __extends(WorkersCronTriggerSchedulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersCronTriggerSchedulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersCronTriggerSchedulesList.prototype.get = function (index) {
        return new WorkersCronTriggerSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersCronTriggerSchedulesList;
}(cdktf.ComplexList));
exports.WorkersCronTriggerSchedulesList = WorkersCronTriggerSchedulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger cloudflare_workers_cron_trigger}
*/
var WorkersCronTrigger = /** @class */ (function (_super) {
    __extends(WorkersCronTrigger, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger cloudflare_workers_cron_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersCronTriggerConfig
    */
    function WorkersCronTrigger(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_cron_trigger',
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
        // schedules - computed: false, optional: false, required: true
        _this._schedules = new WorkersCronTriggerSchedulesList(_this, "schedules", false);
        _this._accountId = config.accountId;
        _this._schedules.internalValue = config.schedules;
        _this._scriptName = config.scriptName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersCronTrigger resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersCronTrigger to import
    * @param importFromId The id of the existing WorkersCronTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersCronTrigger to import is found
    */
    WorkersCronTrigger.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_cron_trigger", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkersCronTrigger.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersCronTrigger.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkersCronTrigger.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTrigger.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTrigger.prototype, "schedules", {
        get: function () {
            return this._schedules;
        },
        enumerable: false,
        configurable: true
    });
    WorkersCronTrigger.prototype.putSchedules = function (value) {
        this._schedules.internalValue = value;
    };
    Object.defineProperty(WorkersCronTrigger.prototype, "schedulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTrigger.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersCronTrigger.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkersCronTrigger.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            schedules: cdktf.listMapper(workersCronTriggerSchedulesToTerraform, false)(this._schedules.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
        };
    };
    WorkersCronTrigger.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedules: {
                value: cdktf.listMapperHcl(workersCronTriggerSchedulesToHclTerraform, false)(this._schedules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkersCronTriggerSchedulesList",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
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
    WorkersCronTrigger.tfResourceType = "cloudflare_workers_cron_trigger";
    return WorkersCronTrigger;
}(cdktf.TerraformResource));
exports.WorkersCronTrigger = WorkersCronTrigger;
