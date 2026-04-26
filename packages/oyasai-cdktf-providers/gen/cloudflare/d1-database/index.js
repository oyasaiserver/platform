"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database
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
exports.D1Database = exports.D1DatabaseReadReplicationOutputReference = void 0;
exports.d1DatabaseReadReplicationToTerraform = d1DatabaseReadReplicationToTerraform;
exports.d1DatabaseReadReplicationToHclTerraform = d1DatabaseReadReplicationToHclTerraform;
var cdktf = require("cdktf");
function d1DatabaseReadReplicationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
function d1DatabaseReadReplicationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
var D1DatabaseReadReplicationOutputReference = /** @class */ (function (_super) {
    __extends(D1DatabaseReadReplicationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function D1DatabaseReadReplicationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(D1DatabaseReadReplicationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1DatabaseReadReplicationOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1DatabaseReadReplicationOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    return D1DatabaseReadReplicationOutputReference;
}(cdktf.ComplexObject));
exports.D1DatabaseReadReplicationOutputReference = D1DatabaseReadReplicationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database cloudflare_d1_database}
*/
var D1Database = /** @class */ (function (_super) {
    __extends(D1Database, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database cloudflare_d1_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options D1DatabaseConfig
    */
    function D1Database(scope, id, config) {
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
        // read_replication - computed: false, optional: true, required: false
        _this._readReplication = new D1DatabaseReadReplicationOutputReference(_this, "read_replication");
        _this._accountId = config.accountId;
        _this._jurisdiction = config.jurisdiction;
        _this._name = config.name;
        _this._primaryLocationHint = config.primaryLocationHint;
        _this._readReplication.internalValue = config.readReplication;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a D1Database resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the D1Database to import
    * @param importFromId The id of the existing D1Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the D1Database to import is found
    */
    D1Database.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_d1_database", importId: importFromId, provider: provider });
    };
    Object.defineProperty(D1Database.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    D1Database.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(D1Database.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "fileSize", {
        // file_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('file_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    D1Database.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(D1Database.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "numTables", {
        // num_tables - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_tables');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "primaryLocationHint", {
        get: function () {
            return this.getStringAttribute('primary_location_hint');
        },
        set: function (value) {
            this._primaryLocationHint = value;
        },
        enumerable: false,
        configurable: true
    });
    D1Database.prototype.resetPrimaryLocationHint = function () {
        this._primaryLocationHint = undefined;
    };
    Object.defineProperty(D1Database.prototype, "primaryLocationHintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._primaryLocationHint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "readReplication", {
        get: function () {
            return this._readReplication;
        },
        enumerable: false,
        configurable: true
    });
    D1Database.prototype.putReadReplication = function (value) {
        this._readReplication.internalValue = value;
    };
    D1Database.prototype.resetReadReplication = function () {
        this._readReplication.internalValue = undefined;
    };
    Object.defineProperty(D1Database.prototype, "readReplicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readReplication.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "uuid", {
        // uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uuid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D1Database.prototype, "version", {
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
    D1Database.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            name: cdktf.stringToTerraform(this._name),
            primary_location_hint: cdktf.stringToTerraform(this._primaryLocationHint),
            read_replication: d1DatabaseReadReplicationToTerraform(this._readReplication.internalValue),
        };
    };
    D1Database.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            primary_location_hint: {
                value: cdktf.stringToHclTerraform(this._primaryLocationHint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            read_replication: {
                value: d1DatabaseReadReplicationToHclTerraform(this._readReplication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "D1DatabaseReadReplication",
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
    D1Database.tfResourceType = "cloudflare_d1_database";
    return D1Database;
}(cdktf.TerraformResource));
exports.D1Database = D1Database;
