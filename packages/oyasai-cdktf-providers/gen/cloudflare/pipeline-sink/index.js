// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function pipelineSinkConfigCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
export function pipelineSinkConfigCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkConfigCredentialsOutputReference extends cdktf.ComplexObject {
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
        if (this._accessKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKeyId = this._accessKeyId;
        }
        if (this._secretAccessKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessKey = this._secretAccessKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessKeyId = undefined;
            this._secretAccessKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKeyId = value.accessKeyId;
            this._secretAccessKey = value.secretAccessKey;
        }
    }
    // access_key_id - computed: false, optional: false, required: true
    _accessKeyId;
    get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    set accessKeyId(value) {
        this._accessKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyIdInput() {
        return this._accessKeyId;
    }
    // secret_access_key - computed: false, optional: false, required: true
    _secretAccessKey;
    get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    set secretAccessKey(value) {
        this._secretAccessKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretAccessKeyInput() {
        return this._secretAccessKey;
    }
}
export function pipelineSinkConfigFileNamingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        strategy: cdktf.stringToTerraform(struct.strategy),
        suffix: cdktf.stringToTerraform(struct.suffix),
    };
}
export function pipelineSinkConfigFileNamingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy: {
            value: cdktf.stringToHclTerraform(struct.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        suffix: {
            value: cdktf.stringToHclTerraform(struct.suffix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkConfigFileNamingOutputReference extends cdktf.ComplexObject {
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
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        if (this._suffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.suffix = this._suffix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prefix = undefined;
            this._strategy = undefined;
            this._suffix = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prefix = value.prefix;
            this._strategy = value.strategy;
            this._suffix = value.suffix;
        }
    }
    // prefix - computed: false, optional: true, required: false
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    // strategy - computed: false, optional: true, required: false
    _strategy;
    get strategy() {
        return this.getStringAttribute('strategy');
    }
    set strategy(value) {
        this._strategy = value;
    }
    resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get strategyInput() {
        return this._strategy;
    }
    // suffix - computed: false, optional: true, required: false
    _suffix;
    get suffix() {
        return this.getStringAttribute('suffix');
    }
    set suffix(value) {
        this._suffix = value;
    }
    resetSuffix() {
        this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suffixInput() {
        return this._suffix;
    }
}
export function pipelineSinkConfigPartitioningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        time_pattern: cdktf.stringToTerraform(struct.timePattern),
    };
}
export function pipelineSinkConfigPartitioningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        time_pattern: {
            value: cdktf.stringToHclTerraform(struct.timePattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkConfigPartitioningOutputReference extends cdktf.ComplexObject {
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
        if (this._timePattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.timePattern = this._timePattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timePattern = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timePattern = value.timePattern;
        }
    }
    // time_pattern - computed: false, optional: true, required: false
    _timePattern;
    get timePattern() {
        return this.getStringAttribute('time_pattern');
    }
    set timePattern(value) {
        this._timePattern = value;
    }
    resetTimePattern() {
        this._timePattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timePatternInput() {
        return this._timePattern;
    }
}
export function pipelineSinkConfigRollingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_size_bytes: cdktf.numberToTerraform(struct.fileSizeBytes),
        inactivity_seconds: cdktf.numberToTerraform(struct.inactivitySeconds),
        interval_seconds: cdktf.numberToTerraform(struct.intervalSeconds),
    };
}
export function pipelineSinkConfigRollingPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file_size_bytes: {
            value: cdktf.numberToHclTerraform(struct.fileSizeBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        inactivity_seconds: {
            value: cdktf.numberToHclTerraform(struct.inactivitySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_seconds: {
            value: cdktf.numberToHclTerraform(struct.intervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkConfigRollingPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._fileSizeBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSizeBytes = this._fileSizeBytes;
        }
        if (this._inactivitySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.inactivitySeconds = this._inactivitySeconds;
        }
        if (this._intervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalSeconds = this._intervalSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSizeBytes = undefined;
            this._inactivitySeconds = undefined;
            this._intervalSeconds = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSizeBytes = value.fileSizeBytes;
            this._inactivitySeconds = value.inactivitySeconds;
            this._intervalSeconds = value.intervalSeconds;
        }
    }
    // file_size_bytes - computed: false, optional: true, required: false
    _fileSizeBytes;
    get fileSizeBytes() {
        return this.getNumberAttribute('file_size_bytes');
    }
    set fileSizeBytes(value) {
        this._fileSizeBytes = value;
    }
    resetFileSizeBytes() {
        this._fileSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileSizeBytesInput() {
        return this._fileSizeBytes;
    }
    // inactivity_seconds - computed: false, optional: true, required: false
    _inactivitySeconds;
    get inactivitySeconds() {
        return this.getNumberAttribute('inactivity_seconds');
    }
    set inactivitySeconds(value) {
        this._inactivitySeconds = value;
    }
    resetInactivitySeconds() {
        this._inactivitySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inactivitySecondsInput() {
        return this._inactivitySeconds;
    }
    // interval_seconds - computed: false, optional: true, required: false
    _intervalSeconds;
    get intervalSeconds() {
        return this.getNumberAttribute('interval_seconds');
    }
    set intervalSeconds(value) {
        this._intervalSeconds = value;
    }
    resetIntervalSeconds() {
        this._intervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalSecondsInput() {
        return this._intervalSeconds;
    }
}
export function pipelineSinkConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        bucket: cdktf.stringToTerraform(struct.bucket),
        credentials: pipelineSinkConfigCredentialsToTerraform(struct.credentials),
        file_naming: pipelineSinkConfigFileNamingToTerraform(struct.fileNaming),
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        namespace: cdktf.stringToTerraform(struct.namespace),
        partitioning: pipelineSinkConfigPartitioningToTerraform(struct.partitioning),
        path: cdktf.stringToTerraform(struct.path),
        rolling_policy: pipelineSinkConfigRollingPolicyToTerraform(struct.rollingPolicy),
        table_name: cdktf.stringToTerraform(struct.tableName),
        token: cdktf.stringToTerraform(struct.token),
    };
}
export function pipelineSinkConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        account_id: {
            value: cdktf.stringToHclTerraform(struct.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket: {
            value: cdktf.stringToHclTerraform(struct.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials: {
            value: pipelineSinkConfigCredentialsToHclTerraform(struct.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigCredentials",
        },
        file_naming: {
            value: pipelineSinkConfigFileNamingToHclTerraform(struct.fileNaming),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigFileNaming",
        },
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partitioning: {
            value: pipelineSinkConfigPartitioningToHclTerraform(struct.partitioning),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigPartitioning",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rolling_policy: {
            value: pipelineSinkConfigRollingPolicyToHclTerraform(struct.rollingPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigRollingPolicy",
        },
        table_name: {
            value: cdktf.stringToHclTerraform(struct.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token: {
            value: cdktf.stringToHclTerraform(struct.token),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkConfigAOutputReference extends cdktf.ComplexObject {
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
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials?.internalValue;
        }
        if (this._fileNaming?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileNaming = this._fileNaming?.internalValue;
        }
        if (this._jurisdiction !== undefined) {
            hasAnyValues = true;
            internalValueResult.jurisdiction = this._jurisdiction;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._partitioning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitioning = this._partitioning?.internalValue;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._rollingPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollingPolicy = this._rollingPolicy?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._token !== undefined) {
            hasAnyValues = true;
            internalValueResult.token = this._token;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._bucket = undefined;
            this._credentials.internalValue = undefined;
            this._fileNaming.internalValue = undefined;
            this._jurisdiction = undefined;
            this._namespace = undefined;
            this._partitioning.internalValue = undefined;
            this._path = undefined;
            this._rollingPolicy.internalValue = undefined;
            this._tableName = undefined;
            this._token = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._bucket = value.bucket;
            this._credentials.internalValue = value.credentials;
            this._fileNaming.internalValue = value.fileNaming;
            this._jurisdiction = value.jurisdiction;
            this._namespace = value.namespace;
            this._partitioning.internalValue = value.partitioning;
            this._path = value.path;
            this._rollingPolicy.internalValue = value.rollingPolicy;
            this._tableName = value.tableName;
            this._token = value.token;
        }
    }
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // bucket - computed: false, optional: false, required: true
    _bucket;
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    // credentials - computed: false, optional: true, required: false
    _credentials = new PipelineSinkConfigCredentialsOutputReference(this, "credentials");
    get credentials() {
        return this._credentials;
    }
    putCredentials(value) {
        this._credentials.internalValue = value;
    }
    resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get credentialsInput() {
        return this._credentials.internalValue;
    }
    // file_naming - computed: false, optional: true, required: false
    _fileNaming = new PipelineSinkConfigFileNamingOutputReference(this, "file_naming");
    get fileNaming() {
        return this._fileNaming;
    }
    putFileNaming(value) {
        this._fileNaming.internalValue = value;
    }
    resetFileNaming() {
        this._fileNaming.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileNamingInput() {
        return this._fileNaming.internalValue;
    }
    // jurisdiction - computed: false, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // namespace - computed: false, optional: true, required: false
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // partitioning - computed: false, optional: true, required: false
    _partitioning = new PipelineSinkConfigPartitioningOutputReference(this, "partitioning");
    get partitioning() {
        return this._partitioning;
    }
    putPartitioning(value) {
        this._partitioning.internalValue = value;
    }
    resetPartitioning() {
        this._partitioning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get partitioningInput() {
        return this._partitioning.internalValue;
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
    // rolling_policy - computed: false, optional: true, required: false
    _rollingPolicy = new PipelineSinkConfigRollingPolicyOutputReference(this, "rolling_policy");
    get rollingPolicy() {
        return this._rollingPolicy;
    }
    putRollingPolicy(value) {
        this._rollingPolicy.internalValue = value;
    }
    resetRollingPolicy() {
        this._rollingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rollingPolicyInput() {
        return this._rollingPolicy.internalValue;
    }
    // table_name - computed: false, optional: true, required: false
    _tableName;
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    set tableName(value) {
        this._tableName = value;
    }
    resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tableNameInput() {
        return this._tableName;
    }
    // token - computed: false, optional: true, required: false
    _token;
    get token() {
        return this.getStringAttribute('token');
    }
    set token(value) {
        this._token = value;
    }
    resetToken() {
        this._token = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenInput() {
        return this._token;
    }
}
export function pipelineSinkFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compression: cdktf.stringToTerraform(struct.compression),
        decimal_encoding: cdktf.stringToTerraform(struct.decimalEncoding),
        row_group_bytes: cdktf.numberToTerraform(struct.rowGroupBytes),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
        type: cdktf.stringToTerraform(struct.type),
        unstructured: cdktf.booleanToTerraform(struct.unstructured),
    };
}
export function pipelineSinkFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        compression: {
            value: cdktf.stringToHclTerraform(struct.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        decimal_encoding: {
            value: cdktf.stringToHclTerraform(struct.decimalEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_group_bytes: {
            value: cdktf.numberToHclTerraform(struct.rowGroupBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unstructured: {
            value: cdktf.booleanToHclTerraform(struct.unstructured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkFormatOutputReference extends cdktf.ComplexObject {
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
        if (this._compression !== undefined) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._decimalEncoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.decimalEncoding = this._decimalEncoding;
        }
        if (this._rowGroupBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.rowGroupBytes = this._rowGroupBytes;
        }
        if (this._timestampFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampFormat = this._timestampFormat;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._unstructured !== undefined) {
            hasAnyValues = true;
            internalValueResult.unstructured = this._unstructured;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compression = undefined;
            this._decimalEncoding = undefined;
            this._rowGroupBytes = undefined;
            this._timestampFormat = undefined;
            this._type = undefined;
            this._unstructured = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compression = value.compression;
            this._decimalEncoding = value.decimalEncoding;
            this._rowGroupBytes = value.rowGroupBytes;
            this._timestampFormat = value.timestampFormat;
            this._type = value.type;
            this._unstructured = value.unstructured;
        }
    }
    // compression - computed: false, optional: true, required: false
    _compression;
    get compression() {
        return this.getStringAttribute('compression');
    }
    set compression(value) {
        this._compression = value;
    }
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionInput() {
        return this._compression;
    }
    // decimal_encoding - computed: false, optional: true, required: false
    _decimalEncoding;
    get decimalEncoding() {
        return this.getStringAttribute('decimal_encoding');
    }
    set decimalEncoding(value) {
        this._decimalEncoding = value;
    }
    resetDecimalEncoding() {
        this._decimalEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get decimalEncodingInput() {
        return this._decimalEncoding;
    }
    // row_group_bytes - computed: false, optional: true, required: false
    _rowGroupBytes;
    get rowGroupBytes() {
        return this.getNumberAttribute('row_group_bytes');
    }
    set rowGroupBytes(value) {
        this._rowGroupBytes = value;
    }
    resetRowGroupBytes() {
        this._rowGroupBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rowGroupBytesInput() {
        return this._rowGroupBytes;
    }
    // timestamp_format - computed: false, optional: true, required: false
    _timestampFormat;
    get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    set timestampFormat(value) {
        this._timestampFormat = value;
    }
    resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampFormatInput() {
        return this._timestampFormat;
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
    // unstructured - computed: false, optional: true, required: false
    _unstructured;
    get unstructured() {
        return this.getBooleanAttribute('unstructured');
    }
    set unstructured(value) {
        this._unstructured = value;
    }
    resetUnstructured() {
        this._unstructured = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unstructuredInput() {
        return this._unstructured;
    }
}
export function pipelineSinkSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metadata_key: cdktf.stringToTerraform(struct.metadataKey),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        sql_name: cdktf.stringToTerraform(struct.sqlName),
        type: cdktf.stringToTerraform(struct.type),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
export function pipelineSinkSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        metadata_key: {
            value: cdktf.stringToHclTerraform(struct.metadataKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sql_name: {
            value: cdktf.stringToHclTerraform(struct.sqlName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktf.stringToHclTerraform(struct.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkSchemaFieldsOutputReference extends cdktf.ComplexObject {
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
        if (this._metadataKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataKey = this._metadataKey;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        if (this._sqlName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlName = this._sqlName;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataKey = undefined;
            this._name = undefined;
            this._required = undefined;
            this._sqlName = undefined;
            this._type = undefined;
            this._unit = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataKey = value.metadataKey;
            this._name = value.name;
            this._required = value.required;
            this._sqlName = value.sqlName;
            this._type = value.type;
            this._unit = value.unit;
        }
    }
    // metadata_key - computed: false, optional: true, required: false
    _metadataKey;
    get metadataKey() {
        return this.getStringAttribute('metadata_key');
    }
    set metadataKey(value) {
        this._metadataKey = value;
    }
    resetMetadataKey() {
        this._metadataKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataKeyInput() {
        return this._metadataKey;
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
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
    }
    set required(value) {
        this._required = value;
    }
    resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required;
    }
    // sql_name - computed: false, optional: true, required: false
    _sqlName;
    get sqlName() {
        return this.getStringAttribute('sql_name');
    }
    set sqlName(value) {
        this._sqlName = value;
    }
    resetSqlName() {
        this._sqlName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqlNameInput() {
        return this._sqlName;
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
    // unit - computed: false, optional: true, required: false
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
}
export class PipelineSinkSchemaFieldsList extends cdktf.ComplexList {
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
        return new PipelineSinkSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function pipelineSinkSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compression: cdktf.stringToTerraform(struct.compression),
        decimal_encoding: cdktf.stringToTerraform(struct.decimalEncoding),
        row_group_bytes: cdktf.numberToTerraform(struct.rowGroupBytes),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
        type: cdktf.stringToTerraform(struct.type),
        unstructured: cdktf.booleanToTerraform(struct.unstructured),
    };
}
export function pipelineSinkSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        compression: {
            value: cdktf.stringToHclTerraform(struct.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        decimal_encoding: {
            value: cdktf.stringToHclTerraform(struct.decimalEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_group_bytes: {
            value: cdktf.numberToHclTerraform(struct.rowGroupBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unstructured: {
            value: cdktf.booleanToHclTerraform(struct.unstructured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkSchemaFormatOutputReference extends cdktf.ComplexObject {
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
        if (this._compression !== undefined) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._decimalEncoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.decimalEncoding = this._decimalEncoding;
        }
        if (this._rowGroupBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.rowGroupBytes = this._rowGroupBytes;
        }
        if (this._timestampFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampFormat = this._timestampFormat;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._unstructured !== undefined) {
            hasAnyValues = true;
            internalValueResult.unstructured = this._unstructured;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compression = undefined;
            this._decimalEncoding = undefined;
            this._rowGroupBytes = undefined;
            this._timestampFormat = undefined;
            this._type = undefined;
            this._unstructured = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compression = value.compression;
            this._decimalEncoding = value.decimalEncoding;
            this._rowGroupBytes = value.rowGroupBytes;
            this._timestampFormat = value.timestampFormat;
            this._type = value.type;
            this._unstructured = value.unstructured;
        }
    }
    // compression - computed: false, optional: true, required: false
    _compression;
    get compression() {
        return this.getStringAttribute('compression');
    }
    set compression(value) {
        this._compression = value;
    }
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionInput() {
        return this._compression;
    }
    // decimal_encoding - computed: false, optional: true, required: false
    _decimalEncoding;
    get decimalEncoding() {
        return this.getStringAttribute('decimal_encoding');
    }
    set decimalEncoding(value) {
        this._decimalEncoding = value;
    }
    resetDecimalEncoding() {
        this._decimalEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get decimalEncodingInput() {
        return this._decimalEncoding;
    }
    // row_group_bytes - computed: false, optional: true, required: false
    _rowGroupBytes;
    get rowGroupBytes() {
        return this.getNumberAttribute('row_group_bytes');
    }
    set rowGroupBytes(value) {
        this._rowGroupBytes = value;
    }
    resetRowGroupBytes() {
        this._rowGroupBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rowGroupBytesInput() {
        return this._rowGroupBytes;
    }
    // timestamp_format - computed: false, optional: true, required: false
    _timestampFormat;
    get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    set timestampFormat(value) {
        this._timestampFormat = value;
    }
    resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampFormatInput() {
        return this._timestampFormat;
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
    // unstructured - computed: false, optional: true, required: false
    _unstructured;
    get unstructured() {
        return this.getBooleanAttribute('unstructured');
    }
    set unstructured(value) {
        this._unstructured = value;
    }
    resetUnstructured() {
        this._unstructured = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unstructuredInput() {
        return this._unstructured;
    }
}
export function pipelineSinkSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fields: cdktf.listMapper(pipelineSinkSchemaFieldsToTerraform, false)(struct.fields),
        format: pipelineSinkSchemaFormatToTerraform(struct.format),
        inferred: cdktf.booleanToTerraform(struct.inferred),
    };
}
export function pipelineSinkSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        fields: {
            value: cdktf.listMapperHcl(pipelineSinkSchemaFieldsToHclTerraform, false)(struct.fields),
            isBlock: true,
            type: "list",
            storageClassType: "PipelineSinkSchemaFieldsList",
        },
        format: {
            value: pipelineSinkSchemaFormatToHclTerraform(struct.format),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkSchemaFormat",
        },
        inferred: {
            value: cdktf.booleanToHclTerraform(struct.inferred),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PipelineSinkSchemaOutputReference extends cdktf.ComplexObject {
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
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        if (this._format?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format?.internalValue;
        }
        if (this._inferred !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferred = this._inferred;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
            this._format.internalValue = undefined;
            this._inferred = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
            this._format.internalValue = value.format;
            this._inferred = value.inferred;
        }
    }
    // fields - computed: false, optional: true, required: false
    _fields = new PipelineSinkSchemaFieldsList(this, "fields", false);
    get fields() {
        return this._fields;
    }
    putFields(value) {
        this._fields.internalValue = value;
    }
    resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldsInput() {
        return this._fields.internalValue;
    }
    // format - computed: false, optional: true, required: false
    _format = new PipelineSinkSchemaFormatOutputReference(this, "format");
    get format() {
        return this._format;
    }
    putFormat(value) {
        this._format.internalValue = value;
    }
    resetFormat() {
        this._format.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format.internalValue;
    }
    // inferred - computed: false, optional: true, required: false
    _inferred;
    get inferred() {
        return this.getBooleanAttribute('inferred');
    }
    set inferred(value) {
        this._inferred = value;
    }
    resetInferred() {
        this._inferred = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inferredInput() {
        return this._inferred;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}
*/
export class PipelineSink extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_pipeline_sink";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PipelineSink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipelineSink to import
    * @param importFromId The id of the existing PipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipelineSink to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_sink", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink cloudflare_pipeline_sink} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineSinkConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_pipeline_sink',
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
        this._config.internalValue = config.config;
        this._format.internalValue = config.format;
        this._name = config.name;
        this._schema.internalValue = config.schema;
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
    // config - computed: false, optional: true, required: false
    _config = new PipelineSinkConfigAOutputReference(this, "config");
    get config() {
        return this._config;
    }
    putConfig(value) {
        this._config.internalValue = value;
    }
    resetConfig() {
        this._config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configInput() {
        return this._config.internalValue;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // format - computed: false, optional: true, required: false
    _format = new PipelineSinkFormatOutputReference(this, "format");
    get format() {
        return this._format;
    }
    putFormat(value) {
        this._format.internalValue = value;
    }
    resetFormat() {
        this._format.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
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
    // schema - computed: false, optional: true, required: false
    _schema = new PipelineSinkSchemaOutputReference(this, "schema");
    get schema() {
        return this._schema;
    }
    putSchema(value) {
        this._schema.internalValue = value;
    }
    resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemaInput() {
        return this._schema.internalValue;
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
            config: pipelineSinkConfigAToTerraform(this._config.internalValue),
            format: pipelineSinkFormatToTerraform(this._format.internalValue),
            name: cdktf.stringToTerraform(this._name),
            schema: pipelineSinkSchemaToTerraform(this._schema.internalValue),
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
            config: {
                value: pipelineSinkConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineSinkConfigA",
            },
            format: {
                value: pipelineSinkFormatToHclTerraform(this._format.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineSinkFormat",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schema: {
                value: pipelineSinkSchemaToHclTerraform(this._schema.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineSinkSchema",
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
