"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket
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
exports.R2Bucket = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket cloudflare_r2_bucket}
*/
var R2Bucket = /** @class */ (function (_super) {
    __extends(R2Bucket, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket cloudflare_r2_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketConfig
    */
    function R2Bucket(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket',
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
        _this._accountId = config.accountId;
        _this._jurisdiction = config.jurisdiction;
        _this._location = config.location;
        _this._name = config.name;
        _this._storageClass = config.storageClass;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2Bucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2Bucket to import
    * @param importFromId The id of the existing R2Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2Bucket to import is found
    */
    R2Bucket.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2Bucket.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2Bucket.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2Bucket.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2Bucket.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2Bucket.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "location", {
        get: function () {
            return this.getStringAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    R2Bucket.prototype.resetLocation = function () {
        this._location = undefined;
    };
    Object.defineProperty(R2Bucket.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2Bucket.prototype, "storageClass", {
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        set: function (value) {
            this._storageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    R2Bucket.prototype.resetStorageClass = function () {
        this._storageClass = undefined;
    };
    Object.defineProperty(R2Bucket.prototype, "storageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClass;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    R2Bucket.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            location: cdktf.stringToTerraform(this._location),
            name: cdktf.stringToTerraform(this._name),
            storage_class: cdktf.stringToTerraform(this._storageClass),
        };
    };
    R2Bucket.prototype.synthesizeHclAttributes = function () {
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
            location: {
                value: cdktf.stringToHclTerraform(this._location),
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
            storage_class: {
                value: cdktf.stringToHclTerraform(this._storageClass),
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
    R2Bucket.tfResourceType = "cloudflare_r2_bucket";
    return R2Bucket;
}(cdktf.TerraformResource));
exports.R2Bucket = R2Bucket;
