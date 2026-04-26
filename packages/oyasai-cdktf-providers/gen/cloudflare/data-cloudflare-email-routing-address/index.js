"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address
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
exports.DataCloudflareEmailRoutingAddress = exports.DataCloudflareEmailRoutingAddressFilterOutputReference = void 0;
exports.dataCloudflareEmailRoutingAddressFilterToTerraform = dataCloudflareEmailRoutingAddressFilterToTerraform;
exports.dataCloudflareEmailRoutingAddressFilterToHclTerraform = dataCloudflareEmailRoutingAddressFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailRoutingAddressFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        verified: cdktf.booleanToTerraform(struct.verified),
    };
}
function dataCloudflareEmailRoutingAddressFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        verified: {
            value: cdktf.booleanToHclTerraform(struct.verified),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareEmailRoutingAddressFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingAddressFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingAddressFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingAddressFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._verified !== undefined) {
                hasAnyValues = true;
                internalValueResult.verified = this._verified;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._verified = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._verified = value.verified;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddressFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingAddressFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingAddressFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddressFilterOutputReference.prototype, "verified", {
        get: function () {
            return this.getBooleanAttribute('verified');
        },
        set: function (value) {
            this._verified = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingAddressFilterOutputReference.prototype.resetVerified = function () {
        this._verified = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingAddressFilterOutputReference.prototype, "verifiedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._verified;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingAddressFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingAddressFilterOutputReference = DataCloudflareEmailRoutingAddressFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address cloudflare_email_routing_address}
*/
var DataCloudflareEmailRoutingAddress = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingAddress, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address cloudflare_email_routing_address} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingAddressConfig = {}
    */
    function DataCloudflareEmailRoutingAddress(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_address',
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
        _this._filter = new DataCloudflareEmailRoutingAddressFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._destinationAddressIdentifier = config.destinationAddressIdentifier;
        _this._filter.internalValue = config.filter;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingAddress resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingAddress to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingAddress to import is found
    */
    DataCloudflareEmailRoutingAddress.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_address", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingAddress.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "destinationAddressIdentifier", {
        get: function () {
            return this.getStringAttribute('destination_address_identifier');
        },
        set: function (value) {
            this._destinationAddressIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingAddress.prototype.resetDestinationAddressIdentifier = function () {
        this._destinationAddressIdentifier = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "destinationAddressIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationAddressIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingAddress.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareEmailRoutingAddress.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingAddress.prototype, "verified", {
        // verified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('verified');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailRoutingAddress.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            destination_address_identifier: cdktf.stringToTerraform(this._destinationAddressIdentifier),
            filter: dataCloudflareEmailRoutingAddressFilterToTerraform(this._filter.internalValue),
        };
    };
    DataCloudflareEmailRoutingAddress.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_address_identifier: {
                value: cdktf.stringToHclTerraform(this._destinationAddressIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareEmailRoutingAddressFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareEmailRoutingAddressFilter",
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
    DataCloudflareEmailRoutingAddress.tfResourceType = "cloudflare_email_routing_address";
    return DataCloudflareEmailRoutingAddress;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailRoutingAddress = DataCloudflareEmailRoutingAddress;
