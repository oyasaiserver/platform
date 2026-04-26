"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog
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
exports.R2DataCatalog = exports.R2DataCatalogMaintenanceConfigOutputReference = exports.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference = exports.R2DataCatalogMaintenanceConfigCompactionOutputReference = void 0;
exports.r2DataCatalogMaintenanceConfigCompactionToTerraform = r2DataCatalogMaintenanceConfigCompactionToTerraform;
exports.r2DataCatalogMaintenanceConfigCompactionToHclTerraform = r2DataCatalogMaintenanceConfigCompactionToHclTerraform;
exports.r2DataCatalogMaintenanceConfigSnapshotExpirationToTerraform = r2DataCatalogMaintenanceConfigSnapshotExpirationToTerraform;
exports.r2DataCatalogMaintenanceConfigSnapshotExpirationToHclTerraform = r2DataCatalogMaintenanceConfigSnapshotExpirationToHclTerraform;
exports.r2DataCatalogMaintenanceConfigToTerraform = r2DataCatalogMaintenanceConfigToTerraform;
exports.r2DataCatalogMaintenanceConfigToHclTerraform = r2DataCatalogMaintenanceConfigToHclTerraform;
var cdktf = require("cdktf");
function r2DataCatalogMaintenanceConfigCompactionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function r2DataCatalogMaintenanceConfigCompactionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var R2DataCatalogMaintenanceConfigCompactionOutputReference = /** @class */ (function (_super) {
    __extends(R2DataCatalogMaintenanceConfigCompactionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2DataCatalogMaintenanceConfigCompactionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2DataCatalogMaintenanceConfigCompactionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(R2DataCatalogMaintenanceConfigCompactionOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalogMaintenanceConfigCompactionOutputReference.prototype, "targetSizeMb", {
        // target_size_mb - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_size_mb');
        },
        enumerable: false,
        configurable: true
    });
    return R2DataCatalogMaintenanceConfigCompactionOutputReference;
}(cdktf.ComplexObject));
exports.R2DataCatalogMaintenanceConfigCompactionOutputReference = R2DataCatalogMaintenanceConfigCompactionOutputReference;
function r2DataCatalogMaintenanceConfigSnapshotExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function r2DataCatalogMaintenanceConfigSnapshotExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference = /** @class */ (function (_super) {
    __extends(R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.prototype, "maxSnapshotAge", {
        // max_snapshot_age - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('max_snapshot_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.prototype, "minSnapshotsToKeep", {
        // min_snapshots_to_keep - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_snapshots_to_keep');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference;
}(cdktf.ComplexObject));
exports.R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference = R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference;
function r2DataCatalogMaintenanceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function r2DataCatalogMaintenanceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var R2DataCatalogMaintenanceConfigOutputReference = /** @class */ (function (_super) {
    __extends(R2DataCatalogMaintenanceConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2DataCatalogMaintenanceConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // compaction - computed: true, optional: false, required: false
        _this._compaction = new R2DataCatalogMaintenanceConfigCompactionOutputReference(_this, "compaction");
        // snapshot_expiration - computed: true, optional: false, required: false
        _this._snapshotExpiration = new R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference(_this, "snapshot_expiration");
        return _this;
    }
    Object.defineProperty(R2DataCatalogMaintenanceConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(R2DataCatalogMaintenanceConfigOutputReference.prototype, "compaction", {
        get: function () {
            return this._compaction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalogMaintenanceConfigOutputReference.prototype, "snapshotExpiration", {
        get: function () {
            return this._snapshotExpiration;
        },
        enumerable: false,
        configurable: true
    });
    return R2DataCatalogMaintenanceConfigOutputReference;
}(cdktf.ComplexObject));
exports.R2DataCatalogMaintenanceConfigOutputReference = R2DataCatalogMaintenanceConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog cloudflare_r2_data_catalog}
*/
var R2DataCatalog = /** @class */ (function (_super) {
    __extends(R2DataCatalog, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog cloudflare_r2_data_catalog} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2DataCatalogConfig
    */
    function R2DataCatalog(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_data_catalog',
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
        // maintenance_config - computed: true, optional: false, required: false
        _this._maintenanceConfig = new R2DataCatalogMaintenanceConfigOutputReference(_this, "maintenance_config");
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2DataCatalog resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2DataCatalog to import
    * @param importFromId The id of the existing R2DataCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2DataCatalog to import is found
    */
    R2DataCatalog.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_data_catalog", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2DataCatalog.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2DataCatalog.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2DataCatalog.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "credentialStatus", {
        // credential_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credential_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "maintenanceConfig", {
        get: function () {
            return this._maintenanceConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2DataCatalog.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    R2DataCatalog.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
        };
    };
    R2DataCatalog.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
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
    R2DataCatalog.tfResourceType = "cloudflare_r2_data_catalog";
    return R2DataCatalog;
}(cdktf.TerraformResource));
exports.R2DataCatalog = R2DataCatalog;
