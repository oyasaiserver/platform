"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls
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
exports.DataCloudflareMagicTransitSiteAcls = exports.DataCloudflareMagicTransitSiteAclsResultList = exports.DataCloudflareMagicTransitSiteAclsResultOutputReference = exports.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference = exports.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference = void 0;
exports.dataCloudflareMagicTransitSiteAclsResultLan1ToTerraform = dataCloudflareMagicTransitSiteAclsResultLan1ToTerraform;
exports.dataCloudflareMagicTransitSiteAclsResultLan1ToHclTerraform = dataCloudflareMagicTransitSiteAclsResultLan1ToHclTerraform;
exports.dataCloudflareMagicTransitSiteAclsResultLan2ToTerraform = dataCloudflareMagicTransitSiteAclsResultLan2ToTerraform;
exports.dataCloudflareMagicTransitSiteAclsResultLan2ToHclTerraform = dataCloudflareMagicTransitSiteAclsResultLan2ToHclTerraform;
exports.dataCloudflareMagicTransitSiteAclsResultToTerraform = dataCloudflareMagicTransitSiteAclsResultToTerraform;
exports.dataCloudflareMagicTransitSiteAclsResultToHclTerraform = dataCloudflareMagicTransitSiteAclsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSiteAclsResultLan1ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteAclsResultLan1ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteAclsResultLan1OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteAclsResultLan1OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.prototype, "lanId", {
        // lan_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.prototype, "lanName", {
        // lan_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.prototype, "portRanges", {
        // port_ranges - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('port_ranges');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.prototype, "ports", {
        // ports - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberListAttribute('ports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteAclsResultLan1OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference = DataCloudflareMagicTransitSiteAclsResultLan1OutputReference;
function dataCloudflareMagicTransitSiteAclsResultLan2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteAclsResultLan2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteAclsResultLan2OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteAclsResultLan2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.prototype, "lanId", {
        // lan_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.prototype, "lanName", {
        // lan_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.prototype, "portRanges", {
        // port_ranges - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('port_ranges');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.prototype, "ports", {
        // ports - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberListAttribute('ports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteAclsResultLan2OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference = DataCloudflareMagicTransitSiteAclsResultLan2OutputReference;
function dataCloudflareMagicTransitSiteAclsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteAclsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteAclsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAclsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteAclsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // lan_1 - computed: true, optional: false, required: false
        _this._lan1 = new DataCloudflareMagicTransitSiteAclsResultLan1OutputReference(_this, "lan_1");
        // lan_2 - computed: true, optional: false, required: false
        _this._lan2 = new DataCloudflareMagicTransitSiteAclsResultLan2OutputReference(_this, "lan_2");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "forwardLocally", {
        // forward_locally - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('forward_locally');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "lan1", {
        get: function () {
            return this._lan1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "lan2", {
        get: function () {
            return this._lan2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "protocols", {
        // protocols - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('protocols');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclsResultOutputReference.prototype, "unidirectional", {
        // unidirectional - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unidirectional');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteAclsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteAclsResultOutputReference = DataCloudflareMagicTransitSiteAclsResultOutputReference;
var DataCloudflareMagicTransitSiteAclsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAclsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteAclsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicTransitSiteAclsResultList.prototype.get = function (index) {
        return new DataCloudflareMagicTransitSiteAclsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicTransitSiteAclsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicTransitSiteAclsResultList = DataCloudflareMagicTransitSiteAclsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls cloudflare_magic_transit_site_acls}
*/
var DataCloudflareMagicTransitSiteAcls = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAcls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls cloudflare_magic_transit_site_acls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteAclsConfig
    */
    function DataCloudflareMagicTransitSiteAcls(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_acls',
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
        _this._result = new DataCloudflareMagicTransitSiteAclsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._siteId = config.siteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcls to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteAcls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcls to import is found
    */
    DataCloudflareMagicTransitSiteAcls.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_acls", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteAcls.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteAcls.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcls.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSiteAcls.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            site_id: cdktf.stringToTerraform(this._siteId),
        };
    };
    DataCloudflareMagicTransitSiteAcls.prototype.synthesizeHclAttributes = function () {
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
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
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
    DataCloudflareMagicTransitSiteAcls.tfResourceType = "cloudflare_magic_transit_site_acls";
    return DataCloudflareMagicTransitSiteAcls;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSiteAcls = DataCloudflareMagicTransitSiteAcls;
