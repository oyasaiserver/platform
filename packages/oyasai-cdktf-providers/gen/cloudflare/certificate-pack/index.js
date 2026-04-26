"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack
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
exports.CertificatePack = exports.CertificatePackValidationRecordsList = exports.CertificatePackValidationRecordsOutputReference = exports.CertificatePackValidationErrorsList = exports.CertificatePackValidationErrorsOutputReference = exports.CertificatePackDcvDelegationRecordsList = exports.CertificatePackDcvDelegationRecordsOutputReference = exports.CertificatePackCertificatesList = exports.CertificatePackCertificatesOutputReference = exports.CertificatePackCertificatesGeoRestrictionsOutputReference = void 0;
exports.certificatePackCertificatesGeoRestrictionsToTerraform = certificatePackCertificatesGeoRestrictionsToTerraform;
exports.certificatePackCertificatesGeoRestrictionsToHclTerraform = certificatePackCertificatesGeoRestrictionsToHclTerraform;
exports.certificatePackCertificatesToTerraform = certificatePackCertificatesToTerraform;
exports.certificatePackCertificatesToHclTerraform = certificatePackCertificatesToHclTerraform;
exports.certificatePackDcvDelegationRecordsToTerraform = certificatePackDcvDelegationRecordsToTerraform;
exports.certificatePackDcvDelegationRecordsToHclTerraform = certificatePackDcvDelegationRecordsToHclTerraform;
exports.certificatePackValidationErrorsToTerraform = certificatePackValidationErrorsToTerraform;
exports.certificatePackValidationErrorsToHclTerraform = certificatePackValidationErrorsToHclTerraform;
exports.certificatePackValidationRecordsToTerraform = certificatePackValidationRecordsToTerraform;
exports.certificatePackValidationRecordsToHclTerraform = certificatePackValidationRecordsToHclTerraform;
var cdktf = require("cdktf");
function certificatePackCertificatesGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function certificatePackCertificatesGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CertificatePackCertificatesGeoRestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(CertificatePackCertificatesGeoRestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CertificatePackCertificatesGeoRestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertificatePackCertificatesGeoRestrictionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CertificatePackCertificatesGeoRestrictionsOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    return CertificatePackCertificatesGeoRestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.CertificatePackCertificatesGeoRestrictionsOutputReference = CertificatePackCertificatesGeoRestrictionsOutputReference;
function certificatePackCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function certificatePackCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CertificatePackCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(CertificatePackCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // geo_restrictions - computed: true, optional: false, required: false
        _this._geoRestrictions = new CertificatePackCertificatesGeoRestrictionsOutputReference(_this, "geo_restrictions");
        return _this;
    }
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "bundleMethod", {
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "geoRestrictions", {
        get: function () {
            return this._geoRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackCertificatesOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return CertificatePackCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.CertificatePackCertificatesOutputReference = CertificatePackCertificatesOutputReference;
var CertificatePackCertificatesList = /** @class */ (function (_super) {
    __extends(CertificatePackCertificatesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackCertificatesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CertificatePackCertificatesList.prototype.get = function (index) {
        return new CertificatePackCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CertificatePackCertificatesList;
}(cdktf.ComplexList));
exports.CertificatePackCertificatesList = CertificatePackCertificatesList;
function certificatePackDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function certificatePackDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CertificatePackDcvDelegationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(CertificatePackDcvDelegationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackDcvDelegationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackDcvDelegationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return CertificatePackDcvDelegationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.CertificatePackDcvDelegationRecordsOutputReference = CertificatePackDcvDelegationRecordsOutputReference;
var CertificatePackDcvDelegationRecordsList = /** @class */ (function (_super) {
    __extends(CertificatePackDcvDelegationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackDcvDelegationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CertificatePackDcvDelegationRecordsList.prototype.get = function (index) {
        return new CertificatePackDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CertificatePackDcvDelegationRecordsList;
}(cdktf.ComplexList));
exports.CertificatePackDcvDelegationRecordsList = CertificatePackDcvDelegationRecordsList;
function certificatePackValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function certificatePackValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CertificatePackValidationErrorsOutputReference = /** @class */ (function (_super) {
    __extends(CertificatePackValidationErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackValidationErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertificatePackValidationErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CertificatePackValidationErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    return CertificatePackValidationErrorsOutputReference;
}(cdktf.ComplexObject));
exports.CertificatePackValidationErrorsOutputReference = CertificatePackValidationErrorsOutputReference;
var CertificatePackValidationErrorsList = /** @class */ (function (_super) {
    __extends(CertificatePackValidationErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackValidationErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CertificatePackValidationErrorsList.prototype.get = function (index) {
        return new CertificatePackValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CertificatePackValidationErrorsList;
}(cdktf.ComplexList));
exports.CertificatePackValidationErrorsList = CertificatePackValidationErrorsList;
function certificatePackValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function certificatePackValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CertificatePackValidationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(CertificatePackValidationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackValidationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePackValidationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return CertificatePackValidationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.CertificatePackValidationRecordsOutputReference = CertificatePackValidationRecordsOutputReference;
var CertificatePackValidationRecordsList = /** @class */ (function (_super) {
    __extends(CertificatePackValidationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CertificatePackValidationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CertificatePackValidationRecordsList.prototype.get = function (index) {
        return new CertificatePackValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CertificatePackValidationRecordsList;
}(cdktf.ComplexList));
exports.CertificatePackValidationRecordsList = CertificatePackValidationRecordsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack cloudflare_certificate_pack}
*/
var CertificatePack = /** @class */ (function (_super) {
    __extends(CertificatePack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack cloudflare_certificate_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificatePackConfig
    */
    function CertificatePack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_certificate_pack',
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
        // certificates - computed: true, optional: false, required: false
        _this._certificates = new CertificatePackCertificatesList(_this, "certificates", false);
        // dcv_delegation_records - computed: true, optional: false, required: false
        _this._dcvDelegationRecords = new CertificatePackDcvDelegationRecordsList(_this, "dcv_delegation_records", false);
        // validation_errors - computed: true, optional: false, required: false
        _this._validationErrors = new CertificatePackValidationErrorsList(_this, "validation_errors", false);
        // validation_records - computed: true, optional: false, required: false
        _this._validationRecords = new CertificatePackValidationRecordsList(_this, "validation_records", false);
        _this._certificateAuthority = config.certificateAuthority;
        _this._cloudflareBranding = config.cloudflareBranding;
        _this._hosts = config.hosts;
        _this._type = config.type;
        _this._validationMethod = config.validationMethod;
        _this._validityDays = config.validityDays;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertificatePack to import
    * @param importFromId The id of the existing CertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertificatePack to import is found
    */
    CertificatePack.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_pack", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertificatePack.prototype, "certificateAuthority", {
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        set: function (value) {
            this._certificateAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "certificateAuthorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "certificates", {
        get: function () {
            return this._certificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "cloudflareBranding", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_branding');
        },
        set: function (value) {
            this._cloudflareBranding = value;
        },
        enumerable: false,
        configurable: true
    });
    CertificatePack.prototype.resetCloudflareBranding = function () {
        this._cloudflareBranding = undefined;
    };
    Object.defineProperty(CertificatePack.prototype, "cloudflareBrandingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareBranding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "dcvDelegationRecords", {
        get: function () {
            return this._dcvDelegationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "hosts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('hosts'));
        },
        set: function (value) {
            this._hosts = value;
        },
        enumerable: false,
        configurable: true
    });
    CertificatePack.prototype.resetHosts = function () {
        this._hosts = undefined;
    };
    Object.defineProperty(CertificatePack.prototype, "hostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hosts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "primaryCertificate", {
        // primary_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "validationMethod", {
        get: function () {
            return this.getStringAttribute('validation_method');
        },
        set: function (value) {
            this._validationMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "validationMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "validationRecords", {
        get: function () {
            return this._validationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "validityDays", {
        get: function () {
            return this.getNumberAttribute('validity_days');
        },
        set: function (value) {
            this._validityDays = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "validityDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validityDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificatePack.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    CertificatePack.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(CertificatePack.prototype, "zoneIdInput", {
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
    CertificatePack.prototype.synthesizeAttributes = function () {
        return {
            certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
            cloudflare_branding: cdktf.booleanToTerraform(this._cloudflareBranding),
            hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
            type: cdktf.stringToTerraform(this._type),
            validation_method: cdktf.stringToTerraform(this._validationMethod),
            validity_days: cdktf.numberToTerraform(this._validityDays),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CertificatePack.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            certificate_authority: {
                value: cdktf.stringToHclTerraform(this._certificateAuthority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cloudflare_branding: {
                value: cdktf.booleanToHclTerraform(this._cloudflareBranding),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            hosts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_method: {
                value: cdktf.stringToHclTerraform(this._validationMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validity_days: {
                value: cdktf.numberToHclTerraform(this._validityDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    CertificatePack.tfResourceType = "cloudflare_certificate_pack";
    return CertificatePack;
}(cdktf.TerraformResource));
exports.CertificatePack = CertificatePack;
