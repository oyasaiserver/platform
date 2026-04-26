"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl
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
exports.DataCloudflareMagicTransitSiteAcl = exports.DataCloudflareMagicTransitSiteAclLan2OutputReference = exports.DataCloudflareMagicTransitSiteAclLan1OutputReference = void 0;
exports.dataCloudflareMagicTransitSiteAclLan1ToTerraform = dataCloudflareMagicTransitSiteAclLan1ToTerraform;
exports.dataCloudflareMagicTransitSiteAclLan1ToHclTerraform = dataCloudflareMagicTransitSiteAclLan1ToHclTerraform;
exports.dataCloudflareMagicTransitSiteAclLan2ToTerraform = dataCloudflareMagicTransitSiteAclLan2ToTerraform;
exports.dataCloudflareMagicTransitSiteAclLan2ToHclTerraform = dataCloudflareMagicTransitSiteAclLan2ToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSiteAclLan1ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteAclLan1ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteAclLan1OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAclLan1OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteAclLan1OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan1OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan1OutputReference.prototype, "lanId", {
        // lan_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan1OutputReference.prototype, "lanName", {
        // lan_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan1OutputReference.prototype, "portRanges", {
        // port_ranges - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('port_ranges');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan1OutputReference.prototype, "ports", {
        // ports - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberListAttribute('ports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan1OutputReference.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteAclLan1OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteAclLan1OutputReference = DataCloudflareMagicTransitSiteAclLan1OutputReference;
function dataCloudflareMagicTransitSiteAclLan2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteAclLan2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteAclLan2OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAclLan2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteAclLan2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan2OutputReference.prototype, "lanId", {
        // lan_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan2OutputReference.prototype, "lanName", {
        // lan_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lan_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan2OutputReference.prototype, "portRanges", {
        // port_ranges - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('port_ranges');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan2OutputReference.prototype, "ports", {
        // ports - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberListAttribute('ports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAclLan2OutputReference.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteAclLan2OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteAclLan2OutputReference = DataCloudflareMagicTransitSiteAclLan2OutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl}
*/
var DataCloudflareMagicTransitSiteAcl = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteAclConfig
    */
    function DataCloudflareMagicTransitSiteAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_acl',
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
        // lan_1 - computed: true, optional: false, required: false
        _this._lan1 = new DataCloudflareMagicTransitSiteAclLan1OutputReference(_this, "lan_1");
        // lan_2 - computed: true, optional: false, required: false
        _this._lan2 = new DataCloudflareMagicTransitSiteAclLan2OutputReference(_this, "lan_2");
        _this._accountId = config.accountId;
        _this._aclId = config.aclId;
        _this._siteId = config.siteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcl to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcl to import is found
    */
    DataCloudflareMagicTransitSiteAcl.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_acl", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteAcl.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "aclId", {
        get: function () {
            return this.getStringAttribute('acl_id');
        },
        set: function (value) {
            this._aclId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "aclIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aclId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "forwardLocally", {
        // forward_locally - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('forward_locally');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "lan1", {
        get: function () {
            return this._lan1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "lan2", {
        get: function () {
            return this._lan2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "protocols", {
        // protocols - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('protocols');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteAcl.prototype, "unidirectional", {
        // unidirectional - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unidirectional');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSiteAcl.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            acl_id: cdktf.stringToTerraform(this._aclId),
            site_id: cdktf.stringToTerraform(this._siteId),
        };
    };
    DataCloudflareMagicTransitSiteAcl.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            acl_id: {
                value: cdktf.stringToHclTerraform(this._aclId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareMagicTransitSiteAcl.tfResourceType = "cloudflare_magic_transit_site_acl";
    return DataCloudflareMagicTransitSiteAcl;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSiteAcl = DataCloudflareMagicTransitSiteAcl;
