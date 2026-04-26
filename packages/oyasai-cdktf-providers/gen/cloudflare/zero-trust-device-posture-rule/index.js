// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDevicePostureRuleInputLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.paths),
        trust_stores: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.trustStores),
    };
}
export function zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        paths: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.paths),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        trust_stores: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.trustStores),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDevicePostureRuleInputLocationsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._paths !== undefined) {
            hasAnyValues = true;
            internalValueResult.paths = this._paths;
        }
        if (this._trustStores !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustStores = this._trustStores;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._paths = undefined;
            this._trustStores = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._paths = value.paths;
            this._trustStores = value.trustStores;
        }
    }
    // paths - computed: false, optional: true, required: false
    _paths;
    get paths() {
        return this.getListAttribute('paths');
    }
    set paths(value) {
        this._paths = value;
    }
    resetPaths() {
        this._paths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathsInput() {
        return this._paths;
    }
    // trust_stores - computed: false, optional: true, required: false
    _trustStores;
    get trustStores() {
        return this.getListAttribute('trust_stores');
    }
    set trustStores(value) {
        this._trustStores = value;
    }
    resetTrustStores() {
        this._trustStores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trustStoresInput() {
        return this._trustStores;
    }
}
export function zeroTrustDevicePostureRuleInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        active_threats: cdktf.numberToTerraform(struct.activeThreats),
        auth_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.authState),
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
        check_disks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkDisks),
        check_private_key: cdktf.booleanToTerraform(struct.checkPrivateKey),
        cn: cdktf.stringToTerraform(struct.cn),
        compliance_status: cdktf.stringToTerraform(struct.complianceStatus),
        connection_id: cdktf.stringToTerraform(struct.connectionId),
        count_operator: cdktf.stringToTerraform(struct.countOperator),
        domain: cdktf.stringToTerraform(struct.domain),
        eid_last_seen: cdktf.stringToTerraform(struct.eidLastSeen),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        exists: cdktf.booleanToTerraform(struct.exists),
        extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extendedKeyUsage),
        id: cdktf.stringToTerraform(struct.id),
        infected: cdktf.booleanToTerraform(struct.infected),
        is_active: cdktf.booleanToTerraform(struct.isActive),
        issue_count: cdktf.stringToTerraform(struct.issueCount),
        last_seen: cdktf.stringToTerraform(struct.lastSeen),
        locations: zeroTrustDevicePostureRuleInputLocationsToTerraform(struct.locations),
        network_status: cdktf.stringToTerraform(struct.networkStatus),
        operating_system: cdktf.stringToTerraform(struct.operatingSystem),
        operational_state: cdktf.stringToTerraform(struct.operationalState),
        operator: cdktf.stringToTerraform(struct.operator),
        os: cdktf.stringToTerraform(struct.os),
        os_distro_name: cdktf.stringToTerraform(struct.osDistroName),
        os_distro_revision: cdktf.stringToTerraform(struct.osDistroRevision),
        os_version_extra: cdktf.stringToTerraform(struct.osVersionExtra),
        overall: cdktf.stringToTerraform(struct.overall),
        path: cdktf.stringToTerraform(struct.path),
        require_all: cdktf.booleanToTerraform(struct.requireAll),
        risk_level: cdktf.stringToTerraform(struct.riskLevel),
        score: cdktf.numberToTerraform(struct.score),
        score_operator: cdktf.stringToTerraform(struct.scoreOperator),
        sensor_config: cdktf.stringToTerraform(struct.sensorConfig),
        sha256: cdktf.stringToTerraform(struct.sha256),
        state: cdktf.stringToTerraform(struct.state),
        subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subjectAlternativeNames),
        thumbprint: cdktf.stringToTerraform(struct.thumbprint),
        total_score: cdktf.numberToTerraform(struct.totalScore),
        update_window_days: cdktf.numberToTerraform(struct.updateWindowDays),
        version: cdktf.stringToTerraform(struct.version),
        version_operator: cdktf.stringToTerraform(struct.versionOperator),
    };
}
export function zeroTrustDevicePostureRuleInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        active_threats: {
            value: cdktf.numberToHclTerraform(struct.activeThreats),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        auth_state: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.authState),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        check_disks: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checkDisks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        check_private_key: {
            value: cdktf.booleanToHclTerraform(struct.checkPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cn: {
            value: cdktf.stringToHclTerraform(struct.cn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compliance_status: {
            value: cdktf.stringToHclTerraform(struct.complianceStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_id: {
            value: cdktf.stringToHclTerraform(struct.connectionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        count_operator: {
            value: cdktf.stringToHclTerraform(struct.countOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        eid_last_seen: {
            value: cdktf.stringToHclTerraform(struct.eidLastSeen),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exists: {
            value: cdktf.booleanToHclTerraform(struct.exists),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        extended_key_usage: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extendedKeyUsage),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        infected: {
            value: cdktf.booleanToHclTerraform(struct.infected),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_active: {
            value: cdktf.booleanToHclTerraform(struct.isActive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        issue_count: {
            value: cdktf.stringToHclTerraform(struct.issueCount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_seen: {
            value: cdktf.stringToHclTerraform(struct.lastSeen),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locations: {
            value: zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct.locations),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDevicePostureRuleInputLocations",
        },
        network_status: {
            value: cdktf.stringToHclTerraform(struct.networkStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operating_system: {
            value: cdktf.stringToHclTerraform(struct.operatingSystem),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operational_state: {
            value: cdktf.stringToHclTerraform(struct.operationalState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os: {
            value: cdktf.stringToHclTerraform(struct.os),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os_distro_name: {
            value: cdktf.stringToHclTerraform(struct.osDistroName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os_distro_revision: {
            value: cdktf.stringToHclTerraform(struct.osDistroRevision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os_version_extra: {
            value: cdktf.stringToHclTerraform(struct.osVersionExtra),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overall: {
            value: cdktf.stringToHclTerraform(struct.overall),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        require_all: {
            value: cdktf.booleanToHclTerraform(struct.requireAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        risk_level: {
            value: cdktf.stringToHclTerraform(struct.riskLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        score: {
            value: cdktf.numberToHclTerraform(struct.score),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        score_operator: {
            value: cdktf.stringToHclTerraform(struct.scoreOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sensor_config: {
            value: cdktf.stringToHclTerraform(struct.sensorConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sha256: {
            value: cdktf.stringToHclTerraform(struct.sha256),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktf.stringToHclTerraform(struct.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject_alternative_names: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subjectAlternativeNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        thumbprint: {
            value: cdktf.stringToHclTerraform(struct.thumbprint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        total_score: {
            value: cdktf.numberToHclTerraform(struct.totalScore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        update_window_days: {
            value: cdktf.numberToHclTerraform(struct.updateWindowDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_operator: {
            value: cdktf.stringToHclTerraform(struct.versionOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDevicePostureRuleInputOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._activeThreats !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeThreats = this._activeThreats;
        }
        if (this._authState !== undefined) {
            hasAnyValues = true;
            internalValueResult.authState = this._authState;
        }
        if (this._certificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateId = this._certificateId;
        }
        if (this._checkDisks !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkDisks = this._checkDisks;
        }
        if (this._checkPrivateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkPrivateKey = this._checkPrivateKey;
        }
        if (this._cn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cn = this._cn;
        }
        if (this._complianceStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceStatus = this._complianceStatus;
        }
        if (this._connectionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionId = this._connectionId;
        }
        if (this._countOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.countOperator = this._countOperator;
        }
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._eidLastSeen !== undefined) {
            hasAnyValues = true;
            internalValueResult.eidLastSeen = this._eidLastSeen;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._exists !== undefined) {
            hasAnyValues = true;
            internalValueResult.exists = this._exists;
        }
        if (this._extendedKeyUsage !== undefined) {
            hasAnyValues = true;
            internalValueResult.extendedKeyUsage = this._extendedKeyUsage;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._infected !== undefined) {
            hasAnyValues = true;
            internalValueResult.infected = this._infected;
        }
        if (this._isActive !== undefined) {
            hasAnyValues = true;
            internalValueResult.isActive = this._isActive;
        }
        if (this._issueCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.issueCount = this._issueCount;
        }
        if (this._lastSeen !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastSeen = this._lastSeen;
        }
        if (this._locations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.locations = this._locations?.internalValue;
        }
        if (this._networkStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkStatus = this._networkStatus;
        }
        if (this._operatingSystem !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatingSystem = this._operatingSystem;
        }
        if (this._operationalState !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationalState = this._operationalState;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._os !== undefined) {
            hasAnyValues = true;
            internalValueResult.os = this._os;
        }
        if (this._osDistroName !== undefined) {
            hasAnyValues = true;
            internalValueResult.osDistroName = this._osDistroName;
        }
        if (this._osDistroRevision !== undefined) {
            hasAnyValues = true;
            internalValueResult.osDistroRevision = this._osDistroRevision;
        }
        if (this._osVersionExtra !== undefined) {
            hasAnyValues = true;
            internalValueResult.osVersionExtra = this._osVersionExtra;
        }
        if (this._overall !== undefined) {
            hasAnyValues = true;
            internalValueResult.overall = this._overall;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._requireAll !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireAll = this._requireAll;
        }
        if (this._riskLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.riskLevel = this._riskLevel;
        }
        if (this._score !== undefined) {
            hasAnyValues = true;
            internalValueResult.score = this._score;
        }
        if (this._scoreOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.scoreOperator = this._scoreOperator;
        }
        if (this._sensorConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensorConfig = this._sensorConfig;
        }
        if (this._sha256 !== undefined) {
            hasAnyValues = true;
            internalValueResult.sha256 = this._sha256;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._subjectAlternativeNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames;
        }
        if (this._thumbprint !== undefined) {
            hasAnyValues = true;
            internalValueResult.thumbprint = this._thumbprint;
        }
        if (this._totalScore !== undefined) {
            hasAnyValues = true;
            internalValueResult.totalScore = this._totalScore;
        }
        if (this._updateWindowDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateWindowDays = this._updateWindowDays;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        if (this._versionOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionOperator = this._versionOperator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeThreats = undefined;
            this._authState = undefined;
            this._certificateId = undefined;
            this._checkDisks = undefined;
            this._checkPrivateKey = undefined;
            this._cn = undefined;
            this._complianceStatus = undefined;
            this._connectionId = undefined;
            this._countOperator = undefined;
            this._domain = undefined;
            this._eidLastSeen = undefined;
            this._enabled = undefined;
            this._exists = undefined;
            this._extendedKeyUsage = undefined;
            this._id = undefined;
            this._infected = undefined;
            this._isActive = undefined;
            this._issueCount = undefined;
            this._lastSeen = undefined;
            this._locations.internalValue = undefined;
            this._networkStatus = undefined;
            this._operatingSystem = undefined;
            this._operationalState = undefined;
            this._operator = undefined;
            this._os = undefined;
            this._osDistroName = undefined;
            this._osDistroRevision = undefined;
            this._osVersionExtra = undefined;
            this._overall = undefined;
            this._path = undefined;
            this._requireAll = undefined;
            this._riskLevel = undefined;
            this._score = undefined;
            this._scoreOperator = undefined;
            this._sensorConfig = undefined;
            this._sha256 = undefined;
            this._state = undefined;
            this._subjectAlternativeNames = undefined;
            this._thumbprint = undefined;
            this._totalScore = undefined;
            this._updateWindowDays = undefined;
            this._version = undefined;
            this._versionOperator = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeThreats = value.activeThreats;
            this._authState = value.authState;
            this._certificateId = value.certificateId;
            this._checkDisks = value.checkDisks;
            this._checkPrivateKey = value.checkPrivateKey;
            this._cn = value.cn;
            this._complianceStatus = value.complianceStatus;
            this._connectionId = value.connectionId;
            this._countOperator = value.countOperator;
            this._domain = value.domain;
            this._eidLastSeen = value.eidLastSeen;
            this._enabled = value.enabled;
            this._exists = value.exists;
            this._extendedKeyUsage = value.extendedKeyUsage;
            this._id = value.id;
            this._infected = value.infected;
            this._isActive = value.isActive;
            this._issueCount = value.issueCount;
            this._lastSeen = value.lastSeen;
            this._locations.internalValue = value.locations;
            this._networkStatus = value.networkStatus;
            this._operatingSystem = value.operatingSystem;
            this._operationalState = value.operationalState;
            this._operator = value.operator;
            this._os = value.os;
            this._osDistroName = value.osDistroName;
            this._osDistroRevision = value.osDistroRevision;
            this._osVersionExtra = value.osVersionExtra;
            this._overall = value.overall;
            this._path = value.path;
            this._requireAll = value.requireAll;
            this._riskLevel = value.riskLevel;
            this._score = value.score;
            this._scoreOperator = value.scoreOperator;
            this._sensorConfig = value.sensorConfig;
            this._sha256 = value.sha256;
            this._state = value.state;
            this._subjectAlternativeNames = value.subjectAlternativeNames;
            this._thumbprint = value.thumbprint;
            this._totalScore = value.totalScore;
            this._updateWindowDays = value.updateWindowDays;
            this._version = value.version;
            this._versionOperator = value.versionOperator;
        }
    }
    // active_threats - computed: false, optional: true, required: false
    _activeThreats;
    get activeThreats() {
        return this.getNumberAttribute('active_threats');
    }
    set activeThreats(value) {
        this._activeThreats = value;
    }
    resetActiveThreats() {
        this._activeThreats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activeThreatsInput() {
        return this._activeThreats;
    }
    // auth_state - computed: false, optional: true, required: false
    _authState;
    get authState() {
        return this.getListAttribute('auth_state');
    }
    set authState(value) {
        this._authState = value;
    }
    resetAuthState() {
        this._authState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authStateInput() {
        return this._authState;
    }
    // certificate_id - computed: false, optional: true, required: false
    _certificateId;
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    set certificateId(value) {
        this._certificateId = value;
    }
    resetCertificateId() {
        this._certificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateIdInput() {
        return this._certificateId;
    }
    // check_disks - computed: false, optional: true, required: false
    _checkDisks;
    get checkDisks() {
        return this.getListAttribute('check_disks');
    }
    set checkDisks(value) {
        this._checkDisks = value;
    }
    resetCheckDisks() {
        this._checkDisks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkDisksInput() {
        return this._checkDisks;
    }
    // check_private_key - computed: false, optional: true, required: false
    _checkPrivateKey;
    get checkPrivateKey() {
        return this.getBooleanAttribute('check_private_key');
    }
    set checkPrivateKey(value) {
        this._checkPrivateKey = value;
    }
    resetCheckPrivateKey() {
        this._checkPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkPrivateKeyInput() {
        return this._checkPrivateKey;
    }
    // cn - computed: false, optional: true, required: false
    _cn;
    get cn() {
        return this.getStringAttribute('cn');
    }
    set cn(value) {
        this._cn = value;
    }
    resetCn() {
        this._cn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cnInput() {
        return this._cn;
    }
    // compliance_status - computed: false, optional: true, required: false
    _complianceStatus;
    get complianceStatus() {
        return this.getStringAttribute('compliance_status');
    }
    set complianceStatus(value) {
        this._complianceStatus = value;
    }
    resetComplianceStatus() {
        this._complianceStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get complianceStatusInput() {
        return this._complianceStatus;
    }
    // connection_id - computed: false, optional: true, required: false
    _connectionId;
    get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    set connectionId(value) {
        this._connectionId = value;
    }
    resetConnectionId() {
        this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionIdInput() {
        return this._connectionId;
    }
    // count_operator - computed: false, optional: true, required: false
    _countOperator;
    get countOperator() {
        return this.getStringAttribute('count_operator');
    }
    set countOperator(value) {
        this._countOperator = value;
    }
    resetCountOperator() {
        this._countOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countOperatorInput() {
        return this._countOperator;
    }
    // domain - computed: false, optional: true, required: false
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
    // eid_last_seen - computed: false, optional: true, required: false
    _eidLastSeen;
    get eidLastSeen() {
        return this.getStringAttribute('eid_last_seen');
    }
    set eidLastSeen(value) {
        this._eidLastSeen = value;
    }
    resetEidLastSeen() {
        this._eidLastSeen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eidLastSeenInput() {
        return this._eidLastSeen;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // exists - computed: false, optional: true, required: false
    _exists;
    get exists() {
        return this.getBooleanAttribute('exists');
    }
    set exists(value) {
        this._exists = value;
    }
    resetExists() {
        this._exists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get existsInput() {
        return this._exists;
    }
    // extended_key_usage - computed: false, optional: true, required: false
    _extendedKeyUsage;
    get extendedKeyUsage() {
        return this.getListAttribute('extended_key_usage');
    }
    set extendedKeyUsage(value) {
        this._extendedKeyUsage = value;
    }
    resetExtendedKeyUsage() {
        this._extendedKeyUsage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extendedKeyUsageInput() {
        return this._extendedKeyUsage;
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // infected - computed: false, optional: true, required: false
    _infected;
    get infected() {
        return this.getBooleanAttribute('infected');
    }
    set infected(value) {
        this._infected = value;
    }
    resetInfected() {
        this._infected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get infectedInput() {
        return this._infected;
    }
    // is_active - computed: false, optional: true, required: false
    _isActive;
    get isActive() {
        return this.getBooleanAttribute('is_active');
    }
    set isActive(value) {
        this._isActive = value;
    }
    resetIsActive() {
        this._isActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isActiveInput() {
        return this._isActive;
    }
    // issue_count - computed: false, optional: true, required: false
    _issueCount;
    get issueCount() {
        return this.getStringAttribute('issue_count');
    }
    set issueCount(value) {
        this._issueCount = value;
    }
    resetIssueCount() {
        this._issueCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get issueCountInput() {
        return this._issueCount;
    }
    // last_seen - computed: false, optional: true, required: false
    _lastSeen;
    get lastSeen() {
        return this.getStringAttribute('last_seen');
    }
    set lastSeen(value) {
        this._lastSeen = value;
    }
    resetLastSeen() {
        this._lastSeen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lastSeenInput() {
        return this._lastSeen;
    }
    // locations - computed: false, optional: true, required: false
    _locations = new ZeroTrustDevicePostureRuleInputLocationsOutputReference(this, "locations");
    get locations() {
        return this._locations;
    }
    putLocations(value) {
        this._locations.internalValue = value;
    }
    resetLocations() {
        this._locations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationsInput() {
        return this._locations.internalValue;
    }
    // network_status - computed: false, optional: true, required: false
    _networkStatus;
    get networkStatus() {
        return this.getStringAttribute('network_status');
    }
    set networkStatus(value) {
        this._networkStatus = value;
    }
    resetNetworkStatus() {
        this._networkStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkStatusInput() {
        return this._networkStatus;
    }
    // operating_system - computed: false, optional: true, required: false
    _operatingSystem;
    get operatingSystem() {
        return this.getStringAttribute('operating_system');
    }
    set operatingSystem(value) {
        this._operatingSystem = value;
    }
    resetOperatingSystem() {
        this._operatingSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operatingSystemInput() {
        return this._operatingSystem;
    }
    // operational_state - computed: false, optional: true, required: false
    _operationalState;
    get operationalState() {
        return this.getStringAttribute('operational_state');
    }
    set operationalState(value) {
        this._operationalState = value;
    }
    resetOperationalState() {
        this._operationalState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operationalStateInput() {
        return this._operationalState;
    }
    // operator - computed: false, optional: true, required: false
    _operator;
    get operator() {
        return this.getStringAttribute('operator');
    }
    set operator(value) {
        this._operator = value;
    }
    resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operatorInput() {
        return this._operator;
    }
    // os - computed: false, optional: true, required: false
    _os;
    get os() {
        return this.getStringAttribute('os');
    }
    set os(value) {
        this._os = value;
    }
    resetOs() {
        this._os = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get osInput() {
        return this._os;
    }
    // os_distro_name - computed: false, optional: true, required: false
    _osDistroName;
    get osDistroName() {
        return this.getStringAttribute('os_distro_name');
    }
    set osDistroName(value) {
        this._osDistroName = value;
    }
    resetOsDistroName() {
        this._osDistroName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get osDistroNameInput() {
        return this._osDistroName;
    }
    // os_distro_revision - computed: false, optional: true, required: false
    _osDistroRevision;
    get osDistroRevision() {
        return this.getStringAttribute('os_distro_revision');
    }
    set osDistroRevision(value) {
        this._osDistroRevision = value;
    }
    resetOsDistroRevision() {
        this._osDistroRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get osDistroRevisionInput() {
        return this._osDistroRevision;
    }
    // os_version_extra - computed: false, optional: true, required: false
    _osVersionExtra;
    get osVersionExtra() {
        return this.getStringAttribute('os_version_extra');
    }
    set osVersionExtra(value) {
        this._osVersionExtra = value;
    }
    resetOsVersionExtra() {
        this._osVersionExtra = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get osVersionExtraInput() {
        return this._osVersionExtra;
    }
    // overall - computed: false, optional: true, required: false
    _overall;
    get overall() {
        return this.getStringAttribute('overall');
    }
    set overall(value) {
        this._overall = value;
    }
    resetOverall() {
        this._overall = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overallInput() {
        return this._overall;
    }
    // path - computed: false, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // require_all - computed: false, optional: true, required: false
    _requireAll;
    get requireAll() {
        return this.getBooleanAttribute('require_all');
    }
    set requireAll(value) {
        this._requireAll = value;
    }
    resetRequireAll() {
        this._requireAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireAllInput() {
        return this._requireAll;
    }
    // risk_level - computed: false, optional: true, required: false
    _riskLevel;
    get riskLevel() {
        return this.getStringAttribute('risk_level');
    }
    set riskLevel(value) {
        this._riskLevel = value;
    }
    resetRiskLevel() {
        this._riskLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get riskLevelInput() {
        return this._riskLevel;
    }
    // score - computed: false, optional: true, required: false
    _score;
    get score() {
        return this.getNumberAttribute('score');
    }
    set score(value) {
        this._score = value;
    }
    resetScore() {
        this._score = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scoreInput() {
        return this._score;
    }
    // score_operator - computed: false, optional: true, required: false
    _scoreOperator;
    get scoreOperator() {
        return this.getStringAttribute('score_operator');
    }
    set scoreOperator(value) {
        this._scoreOperator = value;
    }
    resetScoreOperator() {
        this._scoreOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scoreOperatorInput() {
        return this._scoreOperator;
    }
    // sensor_config - computed: false, optional: true, required: false
    _sensorConfig;
    get sensorConfig() {
        return this.getStringAttribute('sensor_config');
    }
    set sensorConfig(value) {
        this._sensorConfig = value;
    }
    resetSensorConfig() {
        this._sensorConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sensorConfigInput() {
        return this._sensorConfig;
    }
    // sha256 - computed: false, optional: true, required: false
    _sha256;
    get sha256() {
        return this.getStringAttribute('sha256');
    }
    set sha256(value) {
        this._sha256 = value;
    }
    resetSha256() {
        this._sha256 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sha256Input() {
        return this._sha256;
    }
    // state - computed: false, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // subject_alternative_names - computed: false, optional: true, required: false
    _subjectAlternativeNames;
    get subjectAlternativeNames() {
        return this.getListAttribute('subject_alternative_names');
    }
    set subjectAlternativeNames(value) {
        this._subjectAlternativeNames = value;
    }
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames;
    }
    // thumbprint - computed: false, optional: true, required: false
    _thumbprint;
    get thumbprint() {
        return this.getStringAttribute('thumbprint');
    }
    set thumbprint(value) {
        this._thumbprint = value;
    }
    resetThumbprint() {
        this._thumbprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thumbprintInput() {
        return this._thumbprint;
    }
    // total_score - computed: false, optional: true, required: false
    _totalScore;
    get totalScore() {
        return this.getNumberAttribute('total_score');
    }
    set totalScore(value) {
        this._totalScore = value;
    }
    resetTotalScore() {
        this._totalScore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get totalScoreInput() {
        return this._totalScore;
    }
    // update_window_days - computed: false, optional: true, required: false
    _updateWindowDays;
    get updateWindowDays() {
        return this.getNumberAttribute('update_window_days');
    }
    set updateWindowDays(value) {
        this._updateWindowDays = value;
    }
    resetUpdateWindowDays() {
        this._updateWindowDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateWindowDaysInput() {
        return this._updateWindowDays;
    }
    // version - computed: false, optional: true, required: false
    _version;
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
    // version_operator - computed: false, optional: true, required: false
    _versionOperator;
    get versionOperator() {
        return this.getStringAttribute('version_operator');
    }
    set versionOperator(value) {
        this._versionOperator = value;
    }
    resetVersionOperator() {
        this._versionOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionOperatorInput() {
        return this._versionOperator;
    }
}
export function zeroTrustDevicePostureRuleMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        platform: cdktf.stringToTerraform(struct.platform),
    };
}
export function zeroTrustDevicePostureRuleMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        platform: {
            value: cdktf.stringToHclTerraform(struct.platform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDevicePostureRuleMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._platform !== undefined) {
            hasAnyValues = true;
            internalValueResult.platform = this._platform;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._platform = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._platform = value.platform;
        }
    }
    // platform - computed: false, optional: true, required: false
    _platform;
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
}
export class ZeroTrustDevicePostureRuleMatchList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ZeroTrustDevicePostureRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
export class ZeroTrustDevicePostureRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_posture_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureRule to import
    * @param importFromId The id of the existing ZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDevicePostureRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_rule',
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
        });
        this._accountId = config.accountId;
        this._description = config.description;
        this._expiration = config.expiration;
        this._input.internalValue = config.input;
        this._match.internalValue = config.match;
        this._name = config.name;
        this._schedule = config.schedule;
        this._type = config.type;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // expiration - computed: false, optional: true, required: false
    _expiration;
    get expiration() {
        return this.getStringAttribute('expiration');
    }
    set expiration(value) {
        this._expiration = value;
    }
    resetExpiration() {
        this._expiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expirationInput() {
        return this._expiration;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // input - computed: false, optional: true, required: false
    _input = new ZeroTrustDevicePostureRuleInputOutputReference(this, "input");
    get input() {
        return this._input;
    }
    putInput(value) {
        this._input.internalValue = value;
    }
    resetInput() {
        this._input.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputInput() {
        return this._input.internalValue;
    }
    // match - computed: false, optional: true, required: false
    _match = new ZeroTrustDevicePostureRuleMatchList(this, "match", false);
    get match() {
        return this._match;
    }
    putMatch(value) {
        this._match.internalValue = value;
    }
    resetMatch() {
        this._match.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match.internalValue;
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // schedule - computed: false, optional: true, required: false
    _schedule;
    get schedule() {
        return this.getStringAttribute('schedule');
    }
    set schedule(value) {
        this._schedule = value;
    }
    resetSchedule() {
        this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scheduleInput() {
        return this._schedule;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            expiration: cdktf.stringToTerraform(this._expiration),
            input: zeroTrustDevicePostureRuleInputToTerraform(this._input.internalValue),
            match: cdktf.listMapper(zeroTrustDevicePostureRuleMatchToTerraform, false)(this._match.internalValue),
            name: cdktf.stringToTerraform(this._name),
            schedule: cdktf.stringToTerraform(this._schedule),
            type: cdktf.stringToTerraform(this._type),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expiration: {
                value: cdktf.stringToHclTerraform(this._expiration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input: {
                value: zeroTrustDevicePostureRuleInputToHclTerraform(this._input.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDevicePostureRuleInput",
            },
            match: {
                value: cdktf.listMapperHcl(zeroTrustDevicePostureRuleMatchToHclTerraform, false)(this._match.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDevicePostureRuleMatchList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: cdktf.stringToHclTerraform(this._schedule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
