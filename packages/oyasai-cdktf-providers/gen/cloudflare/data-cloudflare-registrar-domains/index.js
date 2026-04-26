"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains
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
exports.DataCloudflareRegistrarDomains = exports.DataCloudflareRegistrarDomainsResultList = exports.DataCloudflareRegistrarDomainsResultOutputReference = exports.DataCloudflareRegistrarDomainsResultTransferInOutputReference = exports.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference = void 0;
exports.dataCloudflareRegistrarDomainsResultRegistrantContactToTerraform = dataCloudflareRegistrarDomainsResultRegistrantContactToTerraform;
exports.dataCloudflareRegistrarDomainsResultRegistrantContactToHclTerraform = dataCloudflareRegistrarDomainsResultRegistrantContactToHclTerraform;
exports.dataCloudflareRegistrarDomainsResultTransferInToTerraform = dataCloudflareRegistrarDomainsResultTransferInToTerraform;
exports.dataCloudflareRegistrarDomainsResultTransferInToHclTerraform = dataCloudflareRegistrarDomainsResultTransferInToHclTerraform;
exports.dataCloudflareRegistrarDomainsResultToTerraform = dataCloudflareRegistrarDomainsResultToTerraform;
exports.dataCloudflareRegistrarDomainsResultToHclTerraform = dataCloudflareRegistrarDomainsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareRegistrarDomainsResultRegistrantContactToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRegistrarDomainsResultRegistrantContactToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "address2", {
        // address2 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "city", {
        // city - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('city');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "country", {
        // country - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "fax", {
        // fax - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fax');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "firstName", {
        // first_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "lastName", {
        // last_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "organization", {
        // organization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "phone", {
        // phone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.prototype, "zip", {
        // zip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zip');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference = DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference;
function dataCloudflareRegistrarDomainsResultTransferInToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRegistrarDomainsResultTransferInToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRegistrarDomainsResultTransferInOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRegistrarDomainsResultTransferInOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRegistrarDomainsResultTransferInOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "acceptFoa", {
        // accept_foa - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('accept_foa');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "approveTransfer", {
        // approve_transfer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('approve_transfer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "canCancelTransfer", {
        // can_cancel_transfer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_cancel_transfer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "disablePrivacy", {
        // disable_privacy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disable_privacy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "enterAuthCode", {
        // enter_auth_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('enter_auth_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultTransferInOutputReference.prototype, "unlockDomain", {
        // unlock_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unlock_domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRegistrarDomainsResultTransferInOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRegistrarDomainsResultTransferInOutputReference = DataCloudflareRegistrarDomainsResultTransferInOutputReference;
function dataCloudflareRegistrarDomainsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRegistrarDomainsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRegistrarDomainsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRegistrarDomainsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRegistrarDomainsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // registrant_contact - computed: true, optional: false, required: false
        _this._registrantContact = new DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference(_this, "registrant_contact");
        // transfer_in - computed: true, optional: false, required: false
        _this._transferIn = new DataCloudflareRegistrarDomainsResultTransferInOutputReference(_this, "transfer_in");
        return _this;
    }
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "canRegister", {
        // can_register - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_register');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "currentRegistrar", {
        // current_registrar - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('current_registrar');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "expiresAt", {
        // expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "locked", {
        // locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "registrantContact", {
        get: function () {
            return this._registrantContact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "registryStatuses", {
        // registry_statuses - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_statuses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "supportedTld", {
        // supported_tld - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supported_tld');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "transferIn", {
        get: function () {
            return this._transferIn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomainsResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRegistrarDomainsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRegistrarDomainsResultOutputReference = DataCloudflareRegistrarDomainsResultOutputReference;
var DataCloudflareRegistrarDomainsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareRegistrarDomainsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRegistrarDomainsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRegistrarDomainsResultList.prototype.get = function (index) {
        return new DataCloudflareRegistrarDomainsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRegistrarDomainsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareRegistrarDomainsResultList = DataCloudflareRegistrarDomainsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains cloudflare_registrar_domains}
*/
var DataCloudflareRegistrarDomains = /** @class */ (function (_super) {
    __extends(DataCloudflareRegistrarDomains, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains cloudflare_registrar_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRegistrarDomainsConfig = {}
    */
    function DataCloudflareRegistrarDomains(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_registrar_domains',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareRegistrarDomainsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareRegistrarDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRegistrarDomains to import
    * @param importFromId The id of the existing DataCloudflareRegistrarDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRegistrarDomains to import is found
    */
    DataCloudflareRegistrarDomains.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_registrar_domains", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareRegistrarDomains.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRegistrarDomains.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareRegistrarDomains.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomains.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRegistrarDomains.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareRegistrarDomains.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRegistrarDomains.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareRegistrarDomains.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareRegistrarDomains.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareRegistrarDomains.tfResourceType = "cloudflare_registrar_domains";
    return DataCloudflareRegistrarDomains;
}(cdktf.TerraformDataSource));
exports.DataCloudflareRegistrarDomains = DataCloudflareRegistrarDomains;
