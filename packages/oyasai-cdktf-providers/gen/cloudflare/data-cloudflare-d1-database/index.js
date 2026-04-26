"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database
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
exports.DataCloudflareD1Database = exports.DataCloudflareD1DatabaseReadReplicationOutputReference = exports.DataCloudflareD1DatabaseFilterOutputReference = void 0;
exports.dataCloudflareD1DatabaseFilterToTerraform = dataCloudflareD1DatabaseFilterToTerraform;
exports.dataCloudflareD1DatabaseFilterToHclTerraform = dataCloudflareD1DatabaseFilterToHclTerraform;
exports.dataCloudflareD1DatabaseReadReplicationToTerraform = dataCloudflareD1DatabaseReadReplicationToTerraform;
exports.dataCloudflareD1DatabaseReadReplicationToHclTerraform = dataCloudflareD1DatabaseReadReplicationToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareD1DatabaseFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function dataCloudflareD1DatabaseFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var DataCloudflareD1DatabaseFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareD1DatabaseFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareD1DatabaseFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareD1DatabaseFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1DatabaseFilterOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareD1DatabaseFilterOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareD1DatabaseFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareD1DatabaseFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareD1DatabaseFilterOutputReference = DataCloudflareD1DatabaseFilterOutputReference;
function dataCloudflareD1DatabaseReadReplicationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareD1DatabaseReadReplicationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareD1DatabaseReadReplicationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareD1DatabaseReadReplicationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareD1DatabaseReadReplicationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareD1DatabaseReadReplicationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareD1DatabaseReadReplicationOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareD1DatabaseReadReplicationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareD1DatabaseReadReplicationOutputReference = DataCloudflareD1DatabaseReadReplicationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database cloudflare_d1_database}
*/
var DataCloudflareD1Database = /** @class */ (function (_super) {
    __extends(DataCloudflareD1Database, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database cloudflare_d1_database} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareD1DatabaseConfig = {}
    */
    function DataCloudflareD1Database(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_d1_database',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareD1DatabaseFilterOutputReference(_this, "filter");
        // read_replication - computed: true, optional: false, required: false
        _this._readReplication = new DataCloudflareD1DatabaseReadReplicationOutputReference(_this, "read_replication");
        _this._accountId = config.accountId;
        _this._databaseId = config.databaseId;
        _this._filter.internalValue = config.filter;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareD1Database resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareD1Database to import
    * @param importFromId The id of the existing DataCloudflareD1Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareD1Database to import is found
    */
    DataCloudflareD1Database.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_d1_database", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareD1Database.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareD1Database.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareD1Database.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "databaseId", {
        get: function () {
            return this.getStringAttribute('database_id');
        },
        set: function (value) {
            this._databaseId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareD1Database.prototype.resetDatabaseId = function () {
        this._databaseId = undefined;
    };
    Object.defineProperty(DataCloudflareD1Database.prototype, "databaseIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "fileSize", {
        // file_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('file_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareD1Database.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareD1Database.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareD1Database.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "numTables", {
        // num_tables - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_tables');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "readReplication", {
        get: function () {
            return this._readReplication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "uuid", {
        // uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uuid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareD1Database.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareD1Database.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            database_id: cdktf.stringToTerraform(this._databaseId),
            filter: dataCloudflareD1DatabaseFilterToTerraform(this._filter.internalValue),
        };
    };
    DataCloudflareD1Database.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_id: {
                value: cdktf.stringToHclTerraform(this._databaseId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareD1DatabaseFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareD1DatabaseFilter",
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
    DataCloudflareD1Database.tfResourceType = "cloudflare_d1_database";
    return DataCloudflareD1Database;
}(cdktf.TerraformDataSource));
exports.DataCloudflareD1Database = DataCloudflareD1Database;
