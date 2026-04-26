"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details
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
exports.DataInfisicalIdentityDetails = exports.DataInfisicalIdentityDetailsOrganizationOutputReference = void 0;
exports.dataInfisicalIdentityDetailsOrganizationToTerraform = dataInfisicalIdentityDetailsOrganizationToTerraform;
exports.dataInfisicalIdentityDetailsOrganizationToHclTerraform = dataInfisicalIdentityDetailsOrganizationToHclTerraform;
var cdktf = require("cdktf");
function dataInfisicalIdentityDetailsOrganizationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalIdentityDetailsOrganizationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalIdentityDetailsOrganizationOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalIdentityDetailsOrganizationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataInfisicalIdentityDetailsOrganizationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalIdentityDetailsOrganizationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataInfisicalIdentityDetailsOrganizationOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalIdentityDetailsOrganizationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalIdentityDetailsOrganizationOutputReference.prototype, "slug", {
        // slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('slug');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalIdentityDetailsOrganizationOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalIdentityDetailsOrganizationOutputReference = DataInfisicalIdentityDetailsOrganizationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details infisical_identity_details}
*/
var DataInfisicalIdentityDetails = /** @class */ (function (_super) {
    __extends(DataInfisicalIdentityDetails, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details infisical_identity_details} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalIdentityDetailsConfig = {}
    */
    function DataInfisicalIdentityDetails(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_details',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // ==========
        // ATTRIBUTES
        // ==========
        // organization - computed: true, optional: false, required: false
        _this._organization = new DataInfisicalIdentityDetailsOrganizationOutputReference(_this, "organization");
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalIdentityDetails resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalIdentityDetails to import
    * @param importFromId The id of the existing DataInfisicalIdentityDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalIdentityDetails to import is found
    */
    DataInfisicalIdentityDetails.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_details", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalIdentityDetails.prototype, "organization", {
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalIdentityDetails.prototype.synthesizeAttributes = function () {
        return {};
    };
    DataInfisicalIdentityDetails.prototype.synthesizeHclAttributes = function () {
        var attrs = {};
        return attrs;
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataInfisicalIdentityDetails.tfResourceType = "infisical_identity_details";
    return DataInfisicalIdentityDetails;
}(cdktf.TerraformDataSource));
exports.DataInfisicalIdentityDetails = DataInfisicalIdentityDetails;
