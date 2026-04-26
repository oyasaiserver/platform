"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger
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
exports.DataCloudflareWorkersCronTrigger = exports.DataCloudflareWorkersCronTriggerSchedulesList = exports.DataCloudflareWorkersCronTriggerSchedulesOutputReference = void 0;
exports.dataCloudflareWorkersCronTriggerSchedulesToTerraform = dataCloudflareWorkersCronTriggerSchedulesToTerraform;
exports.dataCloudflareWorkersCronTriggerSchedulesToHclTerraform = dataCloudflareWorkersCronTriggerSchedulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersCronTriggerSchedulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersCronTriggerSchedulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersCronTriggerSchedulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCronTriggerSchedulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersCronTriggerSchedulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersCronTriggerSchedulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersCronTriggerSchedulesOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCronTriggerSchedulesOutputReference.prototype, "cron", {
        // cron - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cron');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCronTriggerSchedulesOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersCronTriggerSchedulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersCronTriggerSchedulesOutputReference = DataCloudflareWorkersCronTriggerSchedulesOutputReference;
var DataCloudflareWorkersCronTriggerSchedulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCronTriggerSchedulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersCronTriggerSchedulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersCronTriggerSchedulesList.prototype.get = function (index) {
        return new DataCloudflareWorkersCronTriggerSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersCronTriggerSchedulesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersCronTriggerSchedulesList = DataCloudflareWorkersCronTriggerSchedulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger cloudflare_workers_cron_trigger}
*/
var DataCloudflareWorkersCronTrigger = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersCronTrigger, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger cloudflare_workers_cron_trigger} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCronTriggerConfig
    */
    function DataCloudflareWorkersCronTrigger(scope, id, config) {
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
        // schedules - computed: true, optional: false, required: false
        _this._schedules = new DataCloudflareWorkersCronTriggerSchedulesList(_this, "schedules", false);
        _this._accountId = config.accountId;
        _this._scriptName = config.scriptName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCronTrigger resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCronTrigger to import
    * @param importFromId The id of the existing DataCloudflareWorkersCronTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCronTrigger to import is found
    */
    DataCloudflareWorkersCronTrigger.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_cron_trigger", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersCronTrigger.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersCronTrigger.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersCronTrigger.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCronTrigger.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCronTrigger.prototype, "schedules", {
        get: function () {
            return this._schedules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCronTrigger.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersCronTrigger.prototype, "scriptNameInput", {
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
    DataCloudflareWorkersCronTrigger.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            script_name: cdktf.stringToTerraform(this._scriptName),
        };
    };
    DataCloudflareWorkersCronTrigger.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareWorkersCronTrigger.tfResourceType = "cloudflare_workers_cron_trigger";
    return DataCloudflareWorkersCronTrigger;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersCronTrigger = DataCloudflareWorkersCronTrigger;
