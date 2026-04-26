// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function repositoryPagesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        branch: cdktf.stringToTerraform(struct.branch),
        path: cdktf.stringToTerraform(struct.path),
    };
}
export function repositoryPagesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        branch: {
            value: cdktf.stringToHclTerraform(struct.branch),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryPagesSourceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._branch !== undefined) {
            hasAnyValues = true;
            internalValueResult.branch = this._branch;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._branch = undefined;
            this._path = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._branch = value.branch;
            this._path = value.path;
        }
    }
    // branch - computed: false, optional: false, required: true
    _branch;
    get branch() {
        return this.getStringAttribute('branch');
    }
    set branch(value) {
        this._branch = value;
    }
    // Temporarily expose input value. Use with caution.
    get branchInput() {
        return this._branch;
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
}
export function repositoryPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_type: cdktf.stringToTerraform(struct.buildType),
        cname: cdktf.stringToTerraform(struct.cname),
        source: repositoryPagesSourceToTerraform(struct.source),
    };
}
export function repositoryPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        build_type: {
            value: cdktf.stringToHclTerraform(struct.buildType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cname: {
            value: cdktf.stringToHclTerraform(struct.cname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: repositoryPagesSourceToHclTerraform(struct.source),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryPagesSourceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryPagesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._buildType !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildType = this._buildType;
        }
        if (this._cname !== undefined) {
            hasAnyValues = true;
            internalValueResult.cname = this._cname;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._buildType = undefined;
            this._cname = undefined;
            this._source.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._buildType = value.buildType;
            this._cname = value.cname;
            this._source.internalValue = value.source;
        }
    }
    // build_type - computed: false, optional: true, required: false
    _buildType;
    get buildType() {
        return this.getStringAttribute('build_type');
    }
    set buildType(value) {
        this._buildType = value;
    }
    resetBuildType() {
        this._buildType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildTypeInput() {
        return this._buildType;
    }
    // cname - computed: false, optional: true, required: false
    _cname;
    get cname() {
        return this.getStringAttribute('cname');
    }
    set cname(value) {
        this._cname = value;
    }
    resetCname() {
        this._cname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cnameInput() {
        return this._cname;
    }
    // custom_404 - computed: true, optional: false, required: false
    get custom404() {
        return this.getBooleanAttribute('custom_404');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // source - computed: false, optional: true, required: false
    _source = new RepositoryPagesSourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
}
export function repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisAdvancedSecurityOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
    }
    // status - computed: false, optional: false, required: true
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
export function repositorySecurityAndAnalysisCodeSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function repositorySecurityAndAnalysisCodeSecurityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisCodeSecurityOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
    }
    // status - computed: false, optional: false, required: true
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
export function repositorySecurityAndAnalysisSecretScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisSecretScanningOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
    }
    // status - computed: false, optional: false, required: true
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
export function repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
    }
    // status - computed: false, optional: false, required: true
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
export function repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
    }
    // status - computed: false, optional: false, required: true
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
export function repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
    }
    // status - computed: false, optional: false, required: true
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
export function repositorySecurityAndAnalysisToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        advanced_security: repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct.advancedSecurity),
        code_security: repositorySecurityAndAnalysisCodeSecurityToTerraform(struct.codeSecurity),
        secret_scanning: repositorySecurityAndAnalysisSecretScanningToTerraform(struct.secretScanning),
        secret_scanning_ai_detection: repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform(struct.secretScanningAiDetection),
        secret_scanning_non_provider_patterns: repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform(struct.secretScanningNonProviderPatterns),
        secret_scanning_push_protection: repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct.secretScanningPushProtection),
    };
}
export function repositorySecurityAndAnalysisToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        advanced_security: {
            value: repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct.advancedSecurity),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisAdvancedSecurityList",
        },
        code_security: {
            value: repositorySecurityAndAnalysisCodeSecurityToHclTerraform(struct.codeSecurity),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisCodeSecurityList",
        },
        secret_scanning: {
            value: repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct.secretScanning),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningList",
        },
        secret_scanning_ai_detection: {
            value: repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform(struct.secretScanningAiDetection),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningAiDetectionList",
        },
        secret_scanning_non_provider_patterns: {
            value: repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform(struct.secretScanningNonProviderPatterns),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsList",
        },
        secret_scanning_push_protection: {
            value: repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct.secretScanningPushProtection),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningPushProtectionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositorySecurityAndAnalysisOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._advancedSecurity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedSecurity = this._advancedSecurity?.internalValue;
        }
        if (this._codeSecurity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeSecurity = this._codeSecurity?.internalValue;
        }
        if (this._secretScanning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretScanning = this._secretScanning?.internalValue;
        }
        if (this._secretScanningAiDetection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretScanningAiDetection = this._secretScanningAiDetection?.internalValue;
        }
        if (this._secretScanningNonProviderPatterns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretScanningNonProviderPatterns = this._secretScanningNonProviderPatterns?.internalValue;
        }
        if (this._secretScanningPushProtection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretScanningPushProtection = this._secretScanningPushProtection?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._advancedSecurity.internalValue = undefined;
            this._codeSecurity.internalValue = undefined;
            this._secretScanning.internalValue = undefined;
            this._secretScanningAiDetection.internalValue = undefined;
            this._secretScanningNonProviderPatterns.internalValue = undefined;
            this._secretScanningPushProtection.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._advancedSecurity.internalValue = value.advancedSecurity;
            this._codeSecurity.internalValue = value.codeSecurity;
            this._secretScanning.internalValue = value.secretScanning;
            this._secretScanningAiDetection.internalValue = value.secretScanningAiDetection;
            this._secretScanningNonProviderPatterns.internalValue = value.secretScanningNonProviderPatterns;
            this._secretScanningPushProtection.internalValue = value.secretScanningPushProtection;
        }
    }
    // advanced_security - computed: false, optional: true, required: false
    _advancedSecurity = new RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(this, "advanced_security");
    get advancedSecurity() {
        return this._advancedSecurity;
    }
    putAdvancedSecurity(value) {
        this._advancedSecurity.internalValue = value;
    }
    resetAdvancedSecurity() {
        this._advancedSecurity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get advancedSecurityInput() {
        return this._advancedSecurity.internalValue;
    }
    // code_security - computed: false, optional: true, required: false
    _codeSecurity = new RepositorySecurityAndAnalysisCodeSecurityOutputReference(this, "code_security");
    get codeSecurity() {
        return this._codeSecurity;
    }
    putCodeSecurity(value) {
        this._codeSecurity.internalValue = value;
    }
    resetCodeSecurity() {
        this._codeSecurity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeSecurityInput() {
        return this._codeSecurity.internalValue;
    }
    // secret_scanning - computed: false, optional: true, required: false
    _secretScanning = new RepositorySecurityAndAnalysisSecretScanningOutputReference(this, "secret_scanning");
    get secretScanning() {
        return this._secretScanning;
    }
    putSecretScanning(value) {
        this._secretScanning.internalValue = value;
    }
    resetSecretScanning() {
        this._secretScanning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningInput() {
        return this._secretScanning.internalValue;
    }
    // secret_scanning_ai_detection - computed: false, optional: true, required: false
    _secretScanningAiDetection = new RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference(this, "secret_scanning_ai_detection");
    get secretScanningAiDetection() {
        return this._secretScanningAiDetection;
    }
    putSecretScanningAiDetection(value) {
        this._secretScanningAiDetection.internalValue = value;
    }
    resetSecretScanningAiDetection() {
        this._secretScanningAiDetection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningAiDetectionInput() {
        return this._secretScanningAiDetection.internalValue;
    }
    // secret_scanning_non_provider_patterns - computed: false, optional: true, required: false
    _secretScanningNonProviderPatterns = new RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference(this, "secret_scanning_non_provider_patterns");
    get secretScanningNonProviderPatterns() {
        return this._secretScanningNonProviderPatterns;
    }
    putSecretScanningNonProviderPatterns(value) {
        this._secretScanningNonProviderPatterns.internalValue = value;
    }
    resetSecretScanningNonProviderPatterns() {
        this._secretScanningNonProviderPatterns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningNonProviderPatternsInput() {
        return this._secretScanningNonProviderPatterns.internalValue;
    }
    // secret_scanning_push_protection - computed: false, optional: true, required: false
    _secretScanningPushProtection = new RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(this, "secret_scanning_push_protection");
    get secretScanningPushProtection() {
        return this._secretScanningPushProtection;
    }
    putSecretScanningPushProtection(value) {
        this._secretScanningPushProtection.internalValue = value;
    }
    resetSecretScanningPushProtection() {
        this._secretScanningPushProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningPushProtectionInput() {
        return this._secretScanningPushProtection.internalValue;
    }
}
export function repositoryTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_all_branches: cdktf.booleanToTerraform(struct.includeAllBranches),
        owner: cdktf.stringToTerraform(struct.owner),
        repository: cdktf.stringToTerraform(struct.repository),
    };
}
export function repositoryTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        include_all_branches: {
            value: cdktf.booleanToHclTerraform(struct.includeAllBranches),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        owner: {
            value: cdktf.stringToHclTerraform(struct.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository: {
            value: cdktf.stringToHclTerraform(struct.repository),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryTemplateOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._includeAllBranches !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeAllBranches = this._includeAllBranches;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._repository !== undefined) {
            hasAnyValues = true;
            internalValueResult.repository = this._repository;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._includeAllBranches = undefined;
            this._owner = undefined;
            this._repository = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._includeAllBranches = value.includeAllBranches;
            this._owner = value.owner;
            this._repository = value.repository;
        }
    }
    // include_all_branches - computed: false, optional: true, required: false
    _includeAllBranches;
    get includeAllBranches() {
        return this.getBooleanAttribute('include_all_branches');
    }
    set includeAllBranches(value) {
        this._includeAllBranches = value;
    }
    resetIncludeAllBranches() {
        this._includeAllBranches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeAllBranchesInput() {
        return this._includeAllBranches;
    }
    // owner - computed: false, optional: false, required: true
    _owner;
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository github_repository}
*/
export class Repository extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Repository to import
    * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Repository to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository github_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._allowAutoMerge = config.allowAutoMerge;
        this._allowForking = config.allowForking;
        this._allowMergeCommit = config.allowMergeCommit;
        this._allowRebaseMerge = config.allowRebaseMerge;
        this._allowSquashMerge = config.allowSquashMerge;
        this._allowUpdateBranch = config.allowUpdateBranch;
        this._archiveOnDestroy = config.archiveOnDestroy;
        this._archived = config.archived;
        this._autoInit = config.autoInit;
        this._defaultBranch = config.defaultBranch;
        this._deleteBranchOnMerge = config.deleteBranchOnMerge;
        this._description = config.description;
        this._etag = config.etag;
        this._fork = config.fork;
        this._gitignoreTemplate = config.gitignoreTemplate;
        this._hasDiscussions = config.hasDiscussions;
        this._hasDownloads = config.hasDownloads;
        this._hasIssues = config.hasIssues;
        this._hasProjects = config.hasProjects;
        this._hasWiki = config.hasWiki;
        this._homepageUrl = config.homepageUrl;
        this._id = config.id;
        this._ignoreVulnerabilityAlertsDuringRead = config.ignoreVulnerabilityAlertsDuringRead;
        this._isTemplate = config.isTemplate;
        this._licenseTemplate = config.licenseTemplate;
        this._mergeCommitMessage = config.mergeCommitMessage;
        this._mergeCommitTitle = config.mergeCommitTitle;
        this._name = config.name;
        this._private = config.private;
        this._sourceOwner = config.sourceOwner;
        this._sourceRepo = config.sourceRepo;
        this._squashMergeCommitMessage = config.squashMergeCommitMessage;
        this._squashMergeCommitTitle = config.squashMergeCommitTitle;
        this._topics = config.topics;
        this._visibility = config.visibility;
        this._vulnerabilityAlerts = config.vulnerabilityAlerts;
        this._webCommitSignoffRequired = config.webCommitSignoffRequired;
        this._pages.internalValue = config.pages;
        this._securityAndAnalysis.internalValue = config.securityAndAnalysis;
        this._template.internalValue = config.template;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allow_auto_merge - computed: false, optional: true, required: false
    _allowAutoMerge;
    get allowAutoMerge() {
        return this.getBooleanAttribute('allow_auto_merge');
    }
    set allowAutoMerge(value) {
        this._allowAutoMerge = value;
    }
    resetAllowAutoMerge() {
        this._allowAutoMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAutoMergeInput() {
        return this._allowAutoMerge;
    }
    // allow_forking - computed: true, optional: true, required: false
    _allowForking;
    get allowForking() {
        return this.getBooleanAttribute('allow_forking');
    }
    set allowForking(value) {
        this._allowForking = value;
    }
    resetAllowForking() {
        this._allowForking = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowForkingInput() {
        return this._allowForking;
    }
    // allow_merge_commit - computed: false, optional: true, required: false
    _allowMergeCommit;
    get allowMergeCommit() {
        return this.getBooleanAttribute('allow_merge_commit');
    }
    set allowMergeCommit(value) {
        this._allowMergeCommit = value;
    }
    resetAllowMergeCommit() {
        this._allowMergeCommit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowMergeCommitInput() {
        return this._allowMergeCommit;
    }
    // allow_rebase_merge - computed: false, optional: true, required: false
    _allowRebaseMerge;
    get allowRebaseMerge() {
        return this.getBooleanAttribute('allow_rebase_merge');
    }
    set allowRebaseMerge(value) {
        this._allowRebaseMerge = value;
    }
    resetAllowRebaseMerge() {
        this._allowRebaseMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowRebaseMergeInput() {
        return this._allowRebaseMerge;
    }
    // allow_squash_merge - computed: false, optional: true, required: false
    _allowSquashMerge;
    get allowSquashMerge() {
        return this.getBooleanAttribute('allow_squash_merge');
    }
    set allowSquashMerge(value) {
        this._allowSquashMerge = value;
    }
    resetAllowSquashMerge() {
        this._allowSquashMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowSquashMergeInput() {
        return this._allowSquashMerge;
    }
    // allow_update_branch - computed: false, optional: true, required: false
    _allowUpdateBranch;
    get allowUpdateBranch() {
        return this.getBooleanAttribute('allow_update_branch');
    }
    set allowUpdateBranch(value) {
        this._allowUpdateBranch = value;
    }
    resetAllowUpdateBranch() {
        this._allowUpdateBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowUpdateBranchInput() {
        return this._allowUpdateBranch;
    }
    // archive_on_destroy - computed: false, optional: true, required: false
    _archiveOnDestroy;
    get archiveOnDestroy() {
        return this.getBooleanAttribute('archive_on_destroy');
    }
    set archiveOnDestroy(value) {
        this._archiveOnDestroy = value;
    }
    resetArchiveOnDestroy() {
        this._archiveOnDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get archiveOnDestroyInput() {
        return this._archiveOnDestroy;
    }
    // archived - computed: false, optional: true, required: false
    _archived;
    get archived() {
        return this.getBooleanAttribute('archived');
    }
    set archived(value) {
        this._archived = value;
    }
    resetArchived() {
        this._archived = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get archivedInput() {
        return this._archived;
    }
    // auto_init - computed: false, optional: true, required: false
    _autoInit;
    get autoInit() {
        return this.getBooleanAttribute('auto_init');
    }
    set autoInit(value) {
        this._autoInit = value;
    }
    resetAutoInit() {
        this._autoInit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoInitInput() {
        return this._autoInit;
    }
    // default_branch - computed: true, optional: true, required: false
    _defaultBranch;
    get defaultBranch() {
        return this.getStringAttribute('default_branch');
    }
    set defaultBranch(value) {
        this._defaultBranch = value;
    }
    resetDefaultBranch() {
        this._defaultBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultBranchInput() {
        return this._defaultBranch;
    }
    // delete_branch_on_merge - computed: false, optional: true, required: false
    _deleteBranchOnMerge;
    get deleteBranchOnMerge() {
        return this.getBooleanAttribute('delete_branch_on_merge');
    }
    set deleteBranchOnMerge(value) {
        this._deleteBranchOnMerge = value;
    }
    resetDeleteBranchOnMerge() {
        this._deleteBranchOnMerge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteBranchOnMergeInput() {
        return this._deleteBranchOnMerge;
    }
    // description - computed: false, optional: true, required: false
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
    // etag - computed: true, optional: true, required: false
    _etag;
    get etag() {
        return this.getStringAttribute('etag');
    }
    set etag(value) {
        this._etag = value;
    }
    resetEtag() {
        this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get etagInput() {
        return this._etag;
    }
    // fork - computed: true, optional: true, required: false
    _fork;
    get fork() {
        return this.getStringAttribute('fork');
    }
    set fork(value) {
        this._fork = value;
    }
    resetFork() {
        this._fork = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forkInput() {
        return this._fork;
    }
    // full_name - computed: true, optional: false, required: false
    get fullName() {
        return this.getStringAttribute('full_name');
    }
    // git_clone_url - computed: true, optional: false, required: false
    get gitCloneUrl() {
        return this.getStringAttribute('git_clone_url');
    }
    // gitignore_template - computed: false, optional: true, required: false
    _gitignoreTemplate;
    get gitignoreTemplate() {
        return this.getStringAttribute('gitignore_template');
    }
    set gitignoreTemplate(value) {
        this._gitignoreTemplate = value;
    }
    resetGitignoreTemplate() {
        this._gitignoreTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gitignoreTemplateInput() {
        return this._gitignoreTemplate;
    }
    // has_discussions - computed: false, optional: true, required: false
    _hasDiscussions;
    get hasDiscussions() {
        return this.getBooleanAttribute('has_discussions');
    }
    set hasDiscussions(value) {
        this._hasDiscussions = value;
    }
    resetHasDiscussions() {
        this._hasDiscussions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasDiscussionsInput() {
        return this._hasDiscussions;
    }
    // has_downloads - computed: false, optional: true, required: false
    _hasDownloads;
    get hasDownloads() {
        return this.getBooleanAttribute('has_downloads');
    }
    set hasDownloads(value) {
        this._hasDownloads = value;
    }
    resetHasDownloads() {
        this._hasDownloads = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasDownloadsInput() {
        return this._hasDownloads;
    }
    // has_issues - computed: false, optional: true, required: false
    _hasIssues;
    get hasIssues() {
        return this.getBooleanAttribute('has_issues');
    }
    set hasIssues(value) {
        this._hasIssues = value;
    }
    resetHasIssues() {
        this._hasIssues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasIssuesInput() {
        return this._hasIssues;
    }
    // has_projects - computed: false, optional: true, required: false
    _hasProjects;
    get hasProjects() {
        return this.getBooleanAttribute('has_projects');
    }
    set hasProjects(value) {
        this._hasProjects = value;
    }
    resetHasProjects() {
        this._hasProjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasProjectsInput() {
        return this._hasProjects;
    }
    // has_wiki - computed: false, optional: true, required: false
    _hasWiki;
    get hasWiki() {
        return this.getBooleanAttribute('has_wiki');
    }
    set hasWiki(value) {
        this._hasWiki = value;
    }
    resetHasWiki() {
        this._hasWiki = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasWikiInput() {
        return this._hasWiki;
    }
    // homepage_url - computed: false, optional: true, required: false
    _homepageUrl;
    get homepageUrl() {
        return this.getStringAttribute('homepage_url');
    }
    set homepageUrl(value) {
        this._homepageUrl = value;
    }
    resetHomepageUrl() {
        this._homepageUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homepageUrlInput() {
        return this._homepageUrl;
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // http_clone_url - computed: true, optional: false, required: false
    get httpCloneUrl() {
        return this.getStringAttribute('http_clone_url');
    }
    // id - computed: true, optional: true, required: false
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
    // ignore_vulnerability_alerts_during_read - computed: false, optional: true, required: false
    _ignoreVulnerabilityAlertsDuringRead;
    get ignoreVulnerabilityAlertsDuringRead() {
        return this.getBooleanAttribute('ignore_vulnerability_alerts_during_read');
    }
    set ignoreVulnerabilityAlertsDuringRead(value) {
        this._ignoreVulnerabilityAlertsDuringRead = value;
    }
    resetIgnoreVulnerabilityAlertsDuringRead() {
        this._ignoreVulnerabilityAlertsDuringRead = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ignoreVulnerabilityAlertsDuringReadInput() {
        return this._ignoreVulnerabilityAlertsDuringRead;
    }
    // is_template - computed: false, optional: true, required: false
    _isTemplate;
    get isTemplate() {
        return this.getBooleanAttribute('is_template');
    }
    set isTemplate(value) {
        this._isTemplate = value;
    }
    resetIsTemplate() {
        this._isTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isTemplateInput() {
        return this._isTemplate;
    }
    // license_template - computed: false, optional: true, required: false
    _licenseTemplate;
    get licenseTemplate() {
        return this.getStringAttribute('license_template');
    }
    set licenseTemplate(value) {
        this._licenseTemplate = value;
    }
    resetLicenseTemplate() {
        this._licenseTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get licenseTemplateInput() {
        return this._licenseTemplate;
    }
    // merge_commit_message - computed: false, optional: true, required: false
    _mergeCommitMessage;
    get mergeCommitMessage() {
        return this.getStringAttribute('merge_commit_message');
    }
    set mergeCommitMessage(value) {
        this._mergeCommitMessage = value;
    }
    resetMergeCommitMessage() {
        this._mergeCommitMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mergeCommitMessageInput() {
        return this._mergeCommitMessage;
    }
    // merge_commit_title - computed: false, optional: true, required: false
    _mergeCommitTitle;
    get mergeCommitTitle() {
        return this.getStringAttribute('merge_commit_title');
    }
    set mergeCommitTitle(value) {
        this._mergeCommitTitle = value;
    }
    resetMergeCommitTitle() {
        this._mergeCommitTitle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mergeCommitTitleInput() {
        return this._mergeCommitTitle;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // primary_language - computed: true, optional: false, required: false
    get primaryLanguage() {
        return this.getStringAttribute('primary_language');
    }
    // private - computed: true, optional: true, required: false
    _private;
    get private() {
        return this.getBooleanAttribute('private');
    }
    set private(value) {
        this._private = value;
    }
    resetPrivate() {
        this._private = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateInput() {
        return this._private;
    }
    // repo_id - computed: true, optional: false, required: false
    get repoId() {
        return this.getNumberAttribute('repo_id');
    }
    // source_owner - computed: true, optional: true, required: false
    _sourceOwner;
    get sourceOwner() {
        return this.getStringAttribute('source_owner');
    }
    set sourceOwner(value) {
        this._sourceOwner = value;
    }
    resetSourceOwner() {
        this._sourceOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceOwnerInput() {
        return this._sourceOwner;
    }
    // source_repo - computed: true, optional: true, required: false
    _sourceRepo;
    get sourceRepo() {
        return this.getStringAttribute('source_repo');
    }
    set sourceRepo(value) {
        this._sourceRepo = value;
    }
    resetSourceRepo() {
        this._sourceRepo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceRepoInput() {
        return this._sourceRepo;
    }
    // squash_merge_commit_message - computed: false, optional: true, required: false
    _squashMergeCommitMessage;
    get squashMergeCommitMessage() {
        return this.getStringAttribute('squash_merge_commit_message');
    }
    set squashMergeCommitMessage(value) {
        this._squashMergeCommitMessage = value;
    }
    resetSquashMergeCommitMessage() {
        this._squashMergeCommitMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get squashMergeCommitMessageInput() {
        return this._squashMergeCommitMessage;
    }
    // squash_merge_commit_title - computed: false, optional: true, required: false
    _squashMergeCommitTitle;
    get squashMergeCommitTitle() {
        return this.getStringAttribute('squash_merge_commit_title');
    }
    set squashMergeCommitTitle(value) {
        this._squashMergeCommitTitle = value;
    }
    resetSquashMergeCommitTitle() {
        this._squashMergeCommitTitle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get squashMergeCommitTitleInput() {
        return this._squashMergeCommitTitle;
    }
    // ssh_clone_url - computed: true, optional: false, required: false
    get sshCloneUrl() {
        return this.getStringAttribute('ssh_clone_url');
    }
    // svn_url - computed: true, optional: false, required: false
    get svnUrl() {
        return this.getStringAttribute('svn_url');
    }
    // topics - computed: true, optional: true, required: false
    _topics;
    get topics() {
        return cdktf.Fn.tolist(this.getListAttribute('topics'));
    }
    set topics(value) {
        this._topics = value;
    }
    resetTopics() {
        this._topics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topicsInput() {
        return this._topics;
    }
    // visibility - computed: true, optional: true, required: false
    _visibility;
    get visibility() {
        return this.getStringAttribute('visibility');
    }
    set visibility(value) {
        this._visibility = value;
    }
    resetVisibility() {
        this._visibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get visibilityInput() {
        return this._visibility;
    }
    // vulnerability_alerts - computed: true, optional: true, required: false
    _vulnerabilityAlerts;
    get vulnerabilityAlerts() {
        return this.getBooleanAttribute('vulnerability_alerts');
    }
    set vulnerabilityAlerts(value) {
        this._vulnerabilityAlerts = value;
    }
    resetVulnerabilityAlerts() {
        this._vulnerabilityAlerts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vulnerabilityAlertsInput() {
        return this._vulnerabilityAlerts;
    }
    // web_commit_signoff_required - computed: true, optional: true, required: false
    _webCommitSignoffRequired;
    get webCommitSignoffRequired() {
        return this.getBooleanAttribute('web_commit_signoff_required');
    }
    set webCommitSignoffRequired(value) {
        this._webCommitSignoffRequired = value;
    }
    resetWebCommitSignoffRequired() {
        this._webCommitSignoffRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webCommitSignoffRequiredInput() {
        return this._webCommitSignoffRequired;
    }
    // pages - computed: false, optional: true, required: false
    _pages = new RepositoryPagesOutputReference(this, "pages");
    get pages() {
        return this._pages;
    }
    putPages(value) {
        this._pages.internalValue = value;
    }
    resetPages() {
        this._pages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pagesInput() {
        return this._pages.internalValue;
    }
    // security_and_analysis - computed: false, optional: true, required: false
    _securityAndAnalysis = new RepositorySecurityAndAnalysisOutputReference(this, "security_and_analysis");
    get securityAndAnalysis() {
        return this._securityAndAnalysis;
    }
    putSecurityAndAnalysis(value) {
        this._securityAndAnalysis.internalValue = value;
    }
    resetSecurityAndAnalysis() {
        this._securityAndAnalysis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityAndAnalysisInput() {
        return this._securityAndAnalysis.internalValue;
    }
    // template - computed: false, optional: true, required: false
    _template = new RepositoryTemplateOutputReference(this, "template");
    get template() {
        return this._template;
    }
    putTemplate(value) {
        this._template.internalValue = value;
    }
    resetTemplate() {
        this._template.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get templateInput() {
        return this._template.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_auto_merge: cdktf.booleanToTerraform(this._allowAutoMerge),
            allow_forking: cdktf.booleanToTerraform(this._allowForking),
            allow_merge_commit: cdktf.booleanToTerraform(this._allowMergeCommit),
            allow_rebase_merge: cdktf.booleanToTerraform(this._allowRebaseMerge),
            allow_squash_merge: cdktf.booleanToTerraform(this._allowSquashMerge),
            allow_update_branch: cdktf.booleanToTerraform(this._allowUpdateBranch),
            archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
            archived: cdktf.booleanToTerraform(this._archived),
            auto_init: cdktf.booleanToTerraform(this._autoInit),
            default_branch: cdktf.stringToTerraform(this._defaultBranch),
            delete_branch_on_merge: cdktf.booleanToTerraform(this._deleteBranchOnMerge),
            description: cdktf.stringToTerraform(this._description),
            etag: cdktf.stringToTerraform(this._etag),
            fork: cdktf.stringToTerraform(this._fork),
            gitignore_template: cdktf.stringToTerraform(this._gitignoreTemplate),
            has_discussions: cdktf.booleanToTerraform(this._hasDiscussions),
            has_downloads: cdktf.booleanToTerraform(this._hasDownloads),
            has_issues: cdktf.booleanToTerraform(this._hasIssues),
            has_projects: cdktf.booleanToTerraform(this._hasProjects),
            has_wiki: cdktf.booleanToTerraform(this._hasWiki),
            homepage_url: cdktf.stringToTerraform(this._homepageUrl),
            id: cdktf.stringToTerraform(this._id),
            ignore_vulnerability_alerts_during_read: cdktf.booleanToTerraform(this._ignoreVulnerabilityAlertsDuringRead),
            is_template: cdktf.booleanToTerraform(this._isTemplate),
            license_template: cdktf.stringToTerraform(this._licenseTemplate),
            merge_commit_message: cdktf.stringToTerraform(this._mergeCommitMessage),
            merge_commit_title: cdktf.stringToTerraform(this._mergeCommitTitle),
            name: cdktf.stringToTerraform(this._name),
            private: cdktf.booleanToTerraform(this._private),
            source_owner: cdktf.stringToTerraform(this._sourceOwner),
            source_repo: cdktf.stringToTerraform(this._sourceRepo),
            squash_merge_commit_message: cdktf.stringToTerraform(this._squashMergeCommitMessage),
            squash_merge_commit_title: cdktf.stringToTerraform(this._squashMergeCommitTitle),
            topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
            visibility: cdktf.stringToTerraform(this._visibility),
            vulnerability_alerts: cdktf.booleanToTerraform(this._vulnerabilityAlerts),
            web_commit_signoff_required: cdktf.booleanToTerraform(this._webCommitSignoffRequired),
            pages: repositoryPagesToTerraform(this._pages.internalValue),
            security_and_analysis: repositorySecurityAndAnalysisToTerraform(this._securityAndAnalysis.internalValue),
            template: repositoryTemplateToTerraform(this._template.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allow_auto_merge: {
                value: cdktf.booleanToHclTerraform(this._allowAutoMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_forking: {
                value: cdktf.booleanToHclTerraform(this._allowForking),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_merge_commit: {
                value: cdktf.booleanToHclTerraform(this._allowMergeCommit),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_rebase_merge: {
                value: cdktf.booleanToHclTerraform(this._allowRebaseMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_squash_merge: {
                value: cdktf.booleanToHclTerraform(this._allowSquashMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_update_branch: {
                value: cdktf.booleanToHclTerraform(this._allowUpdateBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            archive_on_destroy: {
                value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            archived: {
                value: cdktf.booleanToHclTerraform(this._archived),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_init: {
                value: cdktf.booleanToHclTerraform(this._autoInit),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            default_branch: {
                value: cdktf.stringToHclTerraform(this._defaultBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delete_branch_on_merge: {
                value: cdktf.booleanToHclTerraform(this._deleteBranchOnMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fork: {
                value: cdktf.stringToHclTerraform(this._fork),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gitignore_template: {
                value: cdktf.stringToHclTerraform(this._gitignoreTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            has_discussions: {
                value: cdktf.booleanToHclTerraform(this._hasDiscussions),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_downloads: {
                value: cdktf.booleanToHclTerraform(this._hasDownloads),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_issues: {
                value: cdktf.booleanToHclTerraform(this._hasIssues),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_projects: {
                value: cdktf.booleanToHclTerraform(this._hasProjects),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_wiki: {
                value: cdktf.booleanToHclTerraform(this._hasWiki),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            homepage_url: {
                value: cdktf.stringToHclTerraform(this._homepageUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ignore_vulnerability_alerts_during_read: {
                value: cdktf.booleanToHclTerraform(this._ignoreVulnerabilityAlertsDuringRead),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_template: {
                value: cdktf.booleanToHclTerraform(this._isTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            license_template: {
                value: cdktf.stringToHclTerraform(this._licenseTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            merge_commit_message: {
                value: cdktf.stringToHclTerraform(this._mergeCommitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            merge_commit_title: {
                value: cdktf.stringToHclTerraform(this._mergeCommitTitle),
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
            private: {
                value: cdktf.booleanToHclTerraform(this._private),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            source_owner: {
                value: cdktf.stringToHclTerraform(this._sourceOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_repo: {
                value: cdktf.stringToHclTerraform(this._sourceRepo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            squash_merge_commit_message: {
                value: cdktf.stringToHclTerraform(this._squashMergeCommitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            squash_merge_commit_title: {
                value: cdktf.stringToHclTerraform(this._squashMergeCommitTitle),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            topics: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vulnerability_alerts: {
                value: cdktf.booleanToHclTerraform(this._vulnerabilityAlerts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            web_commit_signoff_required: {
                value: cdktf.booleanToHclTerraform(this._webCommitSignoffRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pages: {
                value: repositoryPagesToHclTerraform(this._pages.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryPagesList",
            },
            security_and_analysis: {
                value: repositorySecurityAndAnalysisToHclTerraform(this._securityAndAnalysis.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositorySecurityAndAnalysisList",
            },
            template: {
                value: repositoryTemplateToHclTerraform(this._template.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryTemplateList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
