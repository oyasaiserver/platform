"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization
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
exports.DataCloudflareZeroTrustOrganization = exports.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference = exports.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference = exports.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference = exports.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference = void 0;
exports.dataCloudflareZeroTrustOrganizationCustomPagesToTerraform = dataCloudflareZeroTrustOrganizationCustomPagesToTerraform;
exports.dataCloudflareZeroTrustOrganizationCustomPagesToHclTerraform = dataCloudflareZeroTrustOrganizationCustomPagesToHclTerraform;
exports.dataCloudflareZeroTrustOrganizationLoginDesignToTerraform = dataCloudflareZeroTrustOrganizationLoginDesignToTerraform;
exports.dataCloudflareZeroTrustOrganizationLoginDesignToHclTerraform = dataCloudflareZeroTrustOrganizationLoginDesignToHclTerraform;
exports.dataCloudflareZeroTrustOrganizationMfaConfigToTerraform = dataCloudflareZeroTrustOrganizationMfaConfigToTerraform;
exports.dataCloudflareZeroTrustOrganizationMfaConfigToHclTerraform = dataCloudflareZeroTrustOrganizationMfaConfigToHclTerraform;
exports.dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform = dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform;
exports.dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform = dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustOrganizationCustomPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustOrganizationCustomPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustOrganizationCustomPagesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustOrganizationCustomPagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustOrganizationCustomPagesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.prototype, "forbidden", {
        // forbidden - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('forbidden');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.prototype, "identityDenied", {
        // identity_denied - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_denied');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustOrganizationCustomPagesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference = DataCloudflareZeroTrustOrganizationCustomPagesOutputReference;
function dataCloudflareZeroTrustOrganizationLoginDesignToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustOrganizationLoginDesignToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustOrganizationLoginDesignOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustOrganizationLoginDesignOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.prototype, "backgroundColor", {
        // background_color - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('background_color');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.prototype, "footerText", {
        // footer_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('footer_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.prototype, "headerText", {
        // header_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.prototype, "logoPath", {
        // logo_path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logo_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.prototype, "textColor", {
        // text_color - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('text_color');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustOrganizationLoginDesignOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference = DataCloudflareZeroTrustOrganizationLoginDesignOutputReference;
function dataCloudflareZeroTrustOrganizationMfaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustOrganizationMfaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustOrganizationMfaConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustOrganizationMfaConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustOrganizationMfaConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.prototype, "allowedAuthenticators", {
        // allowed_authenticators - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_authenticators');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.prototype, "amrMatchingSessionDuration", {
        // amr_matching_session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('amr_matching_session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.prototype, "requiredAaguids", {
        // required_aaguids - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('required_aaguids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustOrganizationMfaConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference = DataCloudflareZeroTrustOrganizationMfaConfigOutputReference;
function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "pinPolicy", {
        // pin_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pin_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "requireFipsDevice", {
        // require_fips_device - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_fips_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "sshKeySize", {
        // ssh_key_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberListAttribute('ssh_key_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "sshKeyType", {
        // ssh_key_type - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ssh_key_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.prototype, "touchPolicy", {
        // touch_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('touch_policy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference = DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization}
*/
var DataCloudflareZeroTrustOrganization = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustOrganization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustOrganizationConfig = {}
    */
    function DataCloudflareZeroTrustOrganization(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_organization',
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
        // custom_pages - computed: true, optional: false, required: false
        _this._customPages = new DataCloudflareZeroTrustOrganizationCustomPagesOutputReference(_this, "custom_pages");
        // login_design - computed: true, optional: false, required: false
        _this._loginDesign = new DataCloudflareZeroTrustOrganizationLoginDesignOutputReference(_this, "login_design");
        // mfa_config - computed: true, optional: false, required: false
        _this._mfaConfig = new DataCloudflareZeroTrustOrganizationMfaConfigOutputReference(_this, "mfa_config");
        // mfa_ssh_piv_key_requirements - computed: true, optional: false, required: false
        _this._mfaSshPivKeyRequirements = new DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(_this, "mfa_ssh_piv_key_requirements");
        _this._accountId = config.accountId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustOrganization to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustOrganization to import is found
    */
    DataCloudflareZeroTrustOrganization.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustOrganization.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "allowAuthenticateViaWarp", {
        // allow_authenticate_via_warp - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_authenticate_via_warp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "authDomain", {
        // auth_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "autoRedirectToIdentity", {
        // auto_redirect_to_identity - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_redirect_to_identity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "customPages", {
        get: function () {
            return this._customPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "denyUnmatchedRequests", {
        // deny_unmatched_requests - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deny_unmatched_requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "denyUnmatchedRequestsExemptedZoneNames", {
        // deny_unmatched_requests_exempted_zone_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('deny_unmatched_requests_exempted_zone_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "isUiReadOnly", {
        // is_ui_read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_ui_read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "loginDesign", {
        get: function () {
            return this._loginDesign;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "mfaConfig", {
        get: function () {
            return this._mfaConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "mfaRequiredForAllApps", {
        // mfa_required_for_all_apps - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('mfa_required_for_all_apps');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "mfaSshPivKeyRequirements", {
        get: function () {
            return this._mfaSshPivKeyRequirements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "uiReadOnlyToggleReason", {
        // ui_read_only_toggle_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ui_read_only_toggle_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "userSeatExpirationInactiveTime", {
        // user_seat_expiration_inactive_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_seat_expiration_inactive_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "warpAuthSessionDuration", {
        // warp_auth_session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('warp_auth_session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustOrganization.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustOrganization.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustOrganization.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZeroTrustOrganization.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareZeroTrustOrganization.tfResourceType = "cloudflare_zero_trust_organization";
    return DataCloudflareZeroTrustOrganization;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustOrganization = DataCloudflareZeroTrustOrganization;
