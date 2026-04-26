// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function aiSearchInstanceCustomMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        data_type: cdktf.stringToTerraform(struct.dataType),
        field_name: cdktf.stringToTerraform(struct.fieldName),
    };
}
export function aiSearchInstanceCustomMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        data_type: {
            value: cdktf.stringToHclTerraform(struct.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_name: {
            value: cdktf.stringToHclTerraform(struct.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceCustomMetadataOutputReference extends cdktf.ComplexObject {
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
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataType = undefined;
            this._fieldName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataType = value.dataType;
            this._fieldName = value.fieldName;
        }
    }
    // data_type - computed: false, optional: false, required: true
    _dataType;
    get dataType() {
        return this.getStringAttribute('data_type');
    }
    set dataType(value) {
        this._dataType = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataTypeInput() {
        return this._dataType;
    }
    // field_name - computed: false, optional: false, required: true
    _fieldName;
    get fieldName() {
        return this.getStringAttribute('field_name');
    }
    set fieldName(value) {
        this._fieldName = value;
    }
    // Temporarily expose input value. Use with caution.
    get fieldNameInput() {
        return this._fieldName;
    }
}
export class AiSearchInstanceCustomMetadataList extends cdktf.ComplexList {
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
        return new AiSearchInstanceCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiSearchInstanceIndexMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keyword: cdktf.booleanToTerraform(struct.keyword),
        vector: cdktf.booleanToTerraform(struct.vector),
    };
}
export function aiSearchInstanceIndexMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        keyword: {
            value: cdktf.booleanToHclTerraform(struct.keyword),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vector: {
            value: cdktf.booleanToHclTerraform(struct.vector),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceIndexMethodOutputReference extends cdktf.ComplexObject {
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
        if (this._keyword !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyword = this._keyword;
        }
        if (this._vector !== undefined) {
            hasAnyValues = true;
            internalValueResult.vector = this._vector;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyword = undefined;
            this._vector = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyword = value.keyword;
            this._vector = value.vector;
        }
    }
    // keyword - computed: true, optional: false, required: true
    _keyword;
    get keyword() {
        return this.getBooleanAttribute('keyword');
    }
    set keyword(value) {
        this._keyword = value;
    }
    // Temporarily expose input value. Use with caution.
    get keywordInput() {
        return this._keyword;
    }
    // vector - computed: true, optional: false, required: true
    _vector;
    get vector() {
        return this.getBooleanAttribute('vector');
    }
    set vector(value) {
        this._vector = value;
    }
    // Temporarily expose input value. Use with caution.
    get vectorInput() {
        return this._vector;
    }
}
export function aiSearchInstanceIndexingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keyword_tokenizer: cdktf.stringToTerraform(struct.keywordTokenizer),
    };
}
export function aiSearchInstanceIndexingOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        keyword_tokenizer: {
            value: cdktf.stringToHclTerraform(struct.keywordTokenizer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceIndexingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._keywordTokenizer !== undefined) {
            hasAnyValues = true;
            internalValueResult.keywordTokenizer = this._keywordTokenizer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keywordTokenizer = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keywordTokenizer = value.keywordTokenizer;
        }
    }
    // keyword_tokenizer - computed: true, optional: true, required: false
    _keywordTokenizer;
    get keywordTokenizer() {
        return this.getStringAttribute('keyword_tokenizer');
    }
    set keywordTokenizer(value) {
        this._keywordTokenizer = value;
    }
    resetKeywordTokenizer() {
        this._keywordTokenizer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keywordTokenizerInput() {
        return this._keywordTokenizer;
    }
}
export function aiSearchInstanceMetadataSearchForAgentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
        zone_name: cdktf.stringToTerraform(struct.zoneName),
    };
}
export function aiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_name: {
            value: cdktf.stringToHclTerraform(struct.zoneName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceMetadataSearchForAgentsOutputReference extends cdktf.ComplexObject {
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
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._zoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneId = this._zoneId;
        }
        if (this._zoneName !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneName = this._zoneName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostname = undefined;
            this._zoneId = undefined;
            this._zoneName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostname = value.hostname;
            this._zoneId = value.zoneId;
            this._zoneName = value.zoneName;
        }
    }
    // hostname - computed: false, optional: false, required: true
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // zone_name - computed: false, optional: false, required: true
    _zoneName;
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
    set zoneName(value) {
        this._zoneName = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneNameInput() {
        return this._zoneName;
    }
}
export function aiSearchInstanceMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        created_from_aisearch_wizard: cdktf.booleanToTerraform(struct.createdFromAisearchWizard),
        search_for_agents: aiSearchInstanceMetadataSearchForAgentsToTerraform(struct.searchForAgents),
        worker_domain: cdktf.stringToTerraform(struct.workerDomain),
    };
}
export function aiSearchInstanceMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        created_from_aisearch_wizard: {
            value: cdktf.booleanToHclTerraform(struct.createdFromAisearchWizard),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        search_for_agents: {
            value: aiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct.searchForAgents),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceMetadataSearchForAgents",
        },
        worker_domain: {
            value: cdktf.stringToHclTerraform(struct.workerDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceMetadataOutputReference extends cdktf.ComplexObject {
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
        if (this._createdFromAisearchWizard !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdFromAisearchWizard = this._createdFromAisearchWizard;
        }
        if (this._searchForAgents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.searchForAgents = this._searchForAgents?.internalValue;
        }
        if (this._workerDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerDomain = this._workerDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdFromAisearchWizard = undefined;
            this._searchForAgents.internalValue = undefined;
            this._workerDomain = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdFromAisearchWizard = value.createdFromAisearchWizard;
            this._searchForAgents.internalValue = value.searchForAgents;
            this._workerDomain = value.workerDomain;
        }
    }
    // created_from_aisearch_wizard - computed: false, optional: true, required: false
    _createdFromAisearchWizard;
    get createdFromAisearchWizard() {
        return this.getBooleanAttribute('created_from_aisearch_wizard');
    }
    set createdFromAisearchWizard(value) {
        this._createdFromAisearchWizard = value;
    }
    resetCreatedFromAisearchWizard() {
        this._createdFromAisearchWizard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdFromAisearchWizardInput() {
        return this._createdFromAisearchWizard;
    }
    // search_for_agents - computed: false, optional: true, required: false
    _searchForAgents = new AiSearchInstanceMetadataSearchForAgentsOutputReference(this, "search_for_agents");
    get searchForAgents() {
        return this._searchForAgents;
    }
    putSearchForAgents(value) {
        this._searchForAgents.internalValue = value;
    }
    resetSearchForAgents() {
        this._searchForAgents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchForAgentsInput() {
        return this._searchForAgents.internalValue;
    }
    // worker_domain - computed: false, optional: true, required: false
    _workerDomain;
    get workerDomain() {
        return this.getStringAttribute('worker_domain');
    }
    set workerDomain(value) {
        this._workerDomain = value;
    }
    resetWorkerDomain() {
        this._workerDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workerDomainInput() {
        return this._workerDomain;
    }
}
export function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disabled: cdktf.booleanToTerraform(struct.disabled),
    };
}
export function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
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
        if (this._disabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabled = this._disabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disabled = value.disabled;
        }
    }
    // disabled - computed: true, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
}
export function aiSearchInstancePublicEndpointParamsMcpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        disabled: cdktf.booleanToTerraform(struct.disabled),
    };
}
export function aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstancePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
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
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._disabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabled = this._disabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._disabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._disabled = value.disabled;
        }
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
    // disabled - computed: true, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
}
export function aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        period_ms: cdktf.numberToTerraform(struct.periodMs),
        requests: cdktf.numberToTerraform(struct.requests),
        technique: cdktf.stringToTerraform(struct.technique),
    };
}
export function aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        period_ms: {
            value: cdktf.numberToHclTerraform(struct.periodMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        requests: {
            value: cdktf.numberToHclTerraform(struct.requests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        technique: {
            value: cdktf.stringToHclTerraform(struct.technique),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstancePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
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
        if (this._periodMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodMs = this._periodMs;
        }
        if (this._requests !== undefined) {
            hasAnyValues = true;
            internalValueResult.requests = this._requests;
        }
        if (this._technique !== undefined) {
            hasAnyValues = true;
            internalValueResult.technique = this._technique;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._periodMs = undefined;
            this._requests = undefined;
            this._technique = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._periodMs = value.periodMs;
            this._requests = value.requests;
            this._technique = value.technique;
        }
    }
    // period_ms - computed: true, optional: true, required: false
    _periodMs;
    get periodMs() {
        return this.getNumberAttribute('period_ms');
    }
    set periodMs(value) {
        this._periodMs = value;
    }
    resetPeriodMs() {
        this._periodMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get periodMsInput() {
        return this._periodMs;
    }
    // requests - computed: true, optional: true, required: false
    _requests;
    get requests() {
        return this.getNumberAttribute('requests');
    }
    set requests(value) {
        this._requests = value;
    }
    resetRequests() {
        this._requests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestsInput() {
        return this._requests;
    }
    // technique - computed: true, optional: true, required: false
    _technique;
    get technique() {
        return this.getStringAttribute('technique');
    }
    set technique(value) {
        this._technique = value;
    }
    resetTechnique() {
        this._technique = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get techniqueInput() {
        return this._technique;
    }
}
export function aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disabled: cdktf.booleanToTerraform(struct.disabled),
    };
}
export function aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
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
        if (this._disabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabled = this._disabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disabled = value.disabled;
        }
    }
    // disabled - computed: true, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
}
export function aiSearchInstancePublicEndpointParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorized_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.authorizedHosts),
        chat_completions_endpoint: aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct.chatCompletionsEndpoint),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        mcp: aiSearchInstancePublicEndpointParamsMcpToTerraform(struct.mcp),
        rate_limit: aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct.rateLimit),
        search_endpoint: aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct.searchEndpoint),
    };
}
export function aiSearchInstancePublicEndpointParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authorized_hosts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.authorizedHosts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        chat_completions_endpoint: {
            value: aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct.chatCompletionsEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        mcp: {
            value: aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct.mcp),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsMcp",
        },
        rate_limit: {
            value: aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct.rateLimit),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsRateLimit",
        },
        search_endpoint: {
            value: aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct.searchEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsSearchEndpoint",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstancePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
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
        if (this._authorizedHosts !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizedHosts = this._authorizedHosts;
        }
        if (this._chatCompletionsEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.chatCompletionsEndpoint = this._chatCompletionsEndpoint?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._mcp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcp = this._mcp?.internalValue;
        }
        if (this._rateLimit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateLimit = this._rateLimit?.internalValue;
        }
        if (this._searchEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.searchEndpoint = this._searchEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizedHosts = undefined;
            this._chatCompletionsEndpoint.internalValue = undefined;
            this._enabled = undefined;
            this._mcp.internalValue = undefined;
            this._rateLimit.internalValue = undefined;
            this._searchEndpoint.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizedHosts = value.authorizedHosts;
            this._chatCompletionsEndpoint.internalValue = value.chatCompletionsEndpoint;
            this._enabled = value.enabled;
            this._mcp.internalValue = value.mcp;
            this._rateLimit.internalValue = value.rateLimit;
            this._searchEndpoint.internalValue = value.searchEndpoint;
        }
    }
    // authorized_hosts - computed: true, optional: true, required: false
    _authorizedHosts;
    get authorizedHosts() {
        return this.getListAttribute('authorized_hosts');
    }
    set authorizedHosts(value) {
        this._authorizedHosts = value;
    }
    resetAuthorizedHosts() {
        this._authorizedHosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizedHostsInput() {
        return this._authorizedHosts;
    }
    // chat_completions_endpoint - computed: true, optional: true, required: false
    _chatCompletionsEndpoint = new AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
    get chatCompletionsEndpoint() {
        return this._chatCompletionsEndpoint;
    }
    putChatCompletionsEndpoint(value) {
        this._chatCompletionsEndpoint.internalValue = value;
    }
    resetChatCompletionsEndpoint() {
        this._chatCompletionsEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get chatCompletionsEndpointInput() {
        return this._chatCompletionsEndpoint.internalValue;
    }
    // enabled - computed: true, optional: true, required: false
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
    // mcp - computed: true, optional: true, required: false
    _mcp = new AiSearchInstancePublicEndpointParamsMcpOutputReference(this, "mcp");
    get mcp() {
        return this._mcp;
    }
    putMcp(value) {
        this._mcp.internalValue = value;
    }
    resetMcp() {
        this._mcp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mcpInput() {
        return this._mcp.internalValue;
    }
    // rate_limit - computed: true, optional: true, required: false
    _rateLimit = new AiSearchInstancePublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
    get rateLimit() {
        return this._rateLimit;
    }
    putRateLimit(value) {
        this._rateLimit.internalValue = value;
    }
    resetRateLimit() {
        this._rateLimit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rateLimitInput() {
        return this._rateLimit.internalValue;
    }
    // search_endpoint - computed: true, optional: true, required: false
    _searchEndpoint = new AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
    get searchEndpoint() {
        return this._searchEndpoint;
    }
    putSearchEndpoint(value) {
        this._searchEndpoint.internalValue = value;
    }
    resetSearchEndpoint() {
        this._searchEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchEndpointInput() {
        return this._searchEndpoint.internalValue;
    }
}
export function aiSearchInstanceRetrievalOptionsBoostByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        field: cdktf.stringToTerraform(struct.field),
    };
}
export function aiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field: {
            value: cdktf.stringToHclTerraform(struct.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
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
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._direction = undefined;
            this._field = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._direction = value.direction;
            this._field = value.field;
        }
    }
    // direction - computed: true, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // field - computed: true, optional: false, required: true
    _field;
    get field() {
        return this.getStringAttribute('field');
    }
    set field(value) {
        this._field = value;
    }
    // Temporarily expose input value. Use with caution.
    get fieldInput() {
        return this._field;
    }
}
export class AiSearchInstanceRetrievalOptionsBoostByList extends cdktf.ComplexList {
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
        return new AiSearchInstanceRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiSearchInstanceRetrievalOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        boost_by: cdktf.listMapper(aiSearchInstanceRetrievalOptionsBoostByToTerraform, false)(struct.boostBy),
        keyword_match_mode: cdktf.stringToTerraform(struct.keywordMatchMode),
    };
}
export function aiSearchInstanceRetrievalOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        boost_by: {
            value: cdktf.listMapperHcl(aiSearchInstanceRetrievalOptionsBoostByToHclTerraform, false)(struct.boostBy),
            isBlock: true,
            type: "list",
            storageClassType: "AiSearchInstanceRetrievalOptionsBoostByList",
        },
        keyword_match_mode: {
            value: cdktf.stringToHclTerraform(struct.keywordMatchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceRetrievalOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._boostBy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.boostBy = this._boostBy?.internalValue;
        }
        if (this._keywordMatchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.keywordMatchMode = this._keywordMatchMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._boostBy.internalValue = undefined;
            this._keywordMatchMode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._boostBy.internalValue = value.boostBy;
            this._keywordMatchMode = value.keywordMatchMode;
        }
    }
    // boost_by - computed: true, optional: true, required: false
    _boostBy = new AiSearchInstanceRetrievalOptionsBoostByList(this, "boost_by", false);
    get boostBy() {
        return this._boostBy;
    }
    putBoostBy(value) {
        this._boostBy.internalValue = value;
    }
    resetBoostBy() {
        this._boostBy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get boostByInput() {
        return this._boostBy.internalValue;
    }
    // keyword_match_mode - computed: true, optional: true, required: false
    _keywordMatchMode;
    get keywordMatchMode() {
        return this.getStringAttribute('keyword_match_mode');
    }
    set keywordMatchMode(value) {
        this._keywordMatchMode = value;
    }
    resetKeywordMatchMode() {
        this._keywordMatchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keywordMatchModeInput() {
        return this._keywordMatchMode;
    }
}
export function aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        depth: cdktf.numberToTerraform(struct.depth),
        include_external_links: cdktf.booleanToTerraform(struct.includeExternalLinks),
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        source: cdktf.stringToTerraform(struct.source),
    };
}
export function aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        depth: {
            value: cdktf.numberToHclTerraform(struct.depth),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        include_external_links: {
            value: cdktf.booleanToHclTerraform(struct.includeExternalLinks),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_subdomains: {
            value: cdktf.booleanToHclTerraform(struct.includeSubdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._depth !== undefined) {
            hasAnyValues = true;
            internalValueResult.depth = this._depth;
        }
        if (this._includeExternalLinks !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeExternalLinks = this._includeExternalLinks;
        }
        if (this._includeSubdomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSubdomains = this._includeSubdomains;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._depth = undefined;
            this._includeExternalLinks = undefined;
            this._includeSubdomains = undefined;
            this._maxAge = undefined;
            this._source = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._depth = value.depth;
            this._includeExternalLinks = value.includeExternalLinks;
            this._includeSubdomains = value.includeSubdomains;
            this._maxAge = value.maxAge;
            this._source = value.source;
        }
    }
    // depth - computed: true, optional: true, required: false
    _depth;
    get depth() {
        return this.getNumberAttribute('depth');
    }
    set depth(value) {
        this._depth = value;
    }
    resetDepth() {
        this._depth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get depthInput() {
        return this._depth;
    }
    // include_external_links - computed: true, optional: true, required: false
    _includeExternalLinks;
    get includeExternalLinks() {
        return this.getBooleanAttribute('include_external_links');
    }
    set includeExternalLinks(value) {
        this._includeExternalLinks = value;
    }
    resetIncludeExternalLinks() {
        this._includeExternalLinks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeExternalLinksInput() {
        return this._includeExternalLinks;
    }
    // include_subdomains - computed: true, optional: true, required: false
    _includeSubdomains;
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    set includeSubdomains(value) {
        this._includeSubdomains = value;
    }
    resetIncludeSubdomains() {
        this._includeSubdomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSubdomainsInput() {
        return this._includeSubdomains;
    }
    // max_age - computed: true, optional: true, required: false
    _maxAge;
    get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    set maxAge(value) {
        this._maxAge = value;
    }
    resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAgeInput() {
        return this._maxAge;
    }
    // source - computed: true, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
}
export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        selector: cdktf.stringToTerraform(struct.selector),
    };
}
export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        selector: {
            value: cdktf.stringToHclTerraform(struct.selector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
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
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._selector !== undefined) {
            hasAnyValues = true;
            internalValueResult.selector = this._selector;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._selector = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._selector = value.selector;
        }
    }
    // path - computed: true, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // selector - computed: true, optional: false, required: true
    _selector;
    get selector() {
        return this.getStringAttribute('selector');
    }
    set selector(value) {
        this._selector = value;
    }
    // Temporarily expose input value. Use with caution.
    get selectorInput() {
        return this._selector;
    }
}
export class AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {
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
        return new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_selector: cdktf.listMapper(aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform, false)(struct.contentSelector),
        include_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct.includeHeaders),
        include_images: cdktf.booleanToTerraform(struct.includeImages),
        specific_sitemaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.specificSitemaps),
        use_browser_rendering: cdktf.booleanToTerraform(struct.useBrowserRendering),
    };
}
export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_selector: {
            value: cdktf.listMapperHcl(aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform, false)(struct.contentSelector),
            isBlock: true,
            type: "list",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList",
        },
        include_headers: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.includeHeaders),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        include_images: {
            value: cdktf.booleanToHclTerraform(struct.includeImages),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        specific_sitemaps: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.specificSitemaps),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        use_browser_rendering: {
            value: cdktf.booleanToHclTerraform(struct.useBrowserRendering),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._contentSelector?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentSelector = this._contentSelector?.internalValue;
        }
        if (this._includeHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeHeaders = this._includeHeaders;
        }
        if (this._includeImages !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeImages = this._includeImages;
        }
        if (this._specificSitemaps !== undefined) {
            hasAnyValues = true;
            internalValueResult.specificSitemaps = this._specificSitemaps;
        }
        if (this._useBrowserRendering !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBrowserRendering = this._useBrowserRendering;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentSelector.internalValue = undefined;
            this._includeHeaders = undefined;
            this._includeImages = undefined;
            this._specificSitemaps = undefined;
            this._useBrowserRendering = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentSelector.internalValue = value.contentSelector;
            this._includeHeaders = value.includeHeaders;
            this._includeImages = value.includeImages;
            this._specificSitemaps = value.specificSitemaps;
            this._useBrowserRendering = value.useBrowserRendering;
        }
    }
    // content_selector - computed: true, optional: true, required: false
    _contentSelector = new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(this, "content_selector", false);
    get contentSelector() {
        return this._contentSelector;
    }
    putContentSelector(value) {
        this._contentSelector.internalValue = value;
    }
    resetContentSelector() {
        this._contentSelector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentSelectorInput() {
        return this._contentSelector.internalValue;
    }
    // include_headers - computed: true, optional: true, required: false
    _includeHeaders;
    get includeHeaders() {
        return this.getStringMapAttribute('include_headers');
    }
    set includeHeaders(value) {
        this._includeHeaders = value;
    }
    resetIncludeHeaders() {
        this._includeHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeHeadersInput() {
        return this._includeHeaders;
    }
    // include_images - computed: true, optional: true, required: false
    _includeImages;
    get includeImages() {
        return this.getBooleanAttribute('include_images');
    }
    set includeImages(value) {
        this._includeImages = value;
    }
    resetIncludeImages() {
        this._includeImages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeImagesInput() {
        return this._includeImages;
    }
    // specific_sitemaps - computed: true, optional: true, required: false
    _specificSitemaps;
    get specificSitemaps() {
        return this.getListAttribute('specific_sitemaps');
    }
    set specificSitemaps(value) {
        this._specificSitemaps = value;
    }
    resetSpecificSitemaps() {
        this._specificSitemaps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get specificSitemapsInput() {
        return this._specificSitemaps;
    }
    // use_browser_rendering - computed: true, optional: true, required: false
    _useBrowserRendering;
    get useBrowserRendering() {
        return this.getBooleanAttribute('use_browser_rendering');
    }
    set useBrowserRendering(value) {
        this._useBrowserRendering = value;
    }
    resetUseBrowserRendering() {
        this._useBrowserRendering = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useBrowserRenderingInput() {
        return this._useBrowserRendering;
    }
}
export function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        r2_jurisdiction: cdktf.stringToTerraform(struct.r2Jurisdiction),
        storage_id: cdktf.stringToTerraform(struct.storageId),
        storage_type: cdktf.stringToTerraform(struct.storageType),
    };
}
export function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        r2_jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.r2Jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_id: {
            value: cdktf.stringToHclTerraform(struct.storageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_type: {
            value: cdktf.stringToHclTerraform(struct.storageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._r2Jurisdiction !== undefined) {
            hasAnyValues = true;
            internalValueResult.r2Jurisdiction = this._r2Jurisdiction;
        }
        if (this._storageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageId = this._storageId;
        }
        if (this._storageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageType = this._storageType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._r2Jurisdiction = undefined;
            this._storageId = undefined;
            this._storageType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._r2Jurisdiction = value.r2Jurisdiction;
            this._storageId = value.storageId;
            this._storageType = value.storageType;
        }
    }
    // r2_jurisdiction - computed: true, optional: true, required: false
    _r2Jurisdiction;
    get r2Jurisdiction() {
        return this.getStringAttribute('r2_jurisdiction');
    }
    set r2Jurisdiction(value) {
        this._r2Jurisdiction = value;
    }
    resetR2Jurisdiction() {
        this._r2Jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get r2JurisdictionInput() {
        return this._r2Jurisdiction;
    }
    // storage_id - computed: true, optional: false, required: true
    _storageId;
    get storageId() {
        return this.getStringAttribute('storage_id');
    }
    set storageId(value) {
        this._storageId = value;
    }
    // Temporarily expose input value. Use with caution.
    get storageIdInput() {
        return this._storageId;
    }
    // storage_type - computed: true, optional: true, required: false
    _storageType;
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    set storageType(value) {
        this._storageType = value;
    }
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageTypeInput() {
        return this._storageType;
    }
}
export function aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        crawl_options: aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct.crawlOptions),
        parse_options: aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct.parseOptions),
        parse_type: cdktf.stringToTerraform(struct.parseType),
        store_options: aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct.storeOptions),
    };
}
export function aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        crawl_options: {
            value: aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct.crawlOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerCrawlOptions",
        },
        parse_options: {
            value: aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct.parseOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerParseOptions",
        },
        parse_type: {
            value: cdktf.stringToHclTerraform(struct.parseType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        store_options: {
            value: aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct.storeOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerStoreOptions",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
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
        if (this._crawlOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlOptions = this._crawlOptions?.internalValue;
        }
        if (this._parseOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parseOptions = this._parseOptions?.internalValue;
        }
        if (this._parseType !== undefined) {
            hasAnyValues = true;
            internalValueResult.parseType = this._parseType;
        }
        if (this._storeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storeOptions = this._storeOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlOptions.internalValue = undefined;
            this._parseOptions.internalValue = undefined;
            this._parseType = undefined;
            this._storeOptions.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlOptions.internalValue = value.crawlOptions;
            this._parseOptions.internalValue = value.parseOptions;
            this._parseType = value.parseType;
            this._storeOptions.internalValue = value.storeOptions;
        }
    }
    // crawl_options - computed: true, optional: true, required: false
    _crawlOptions = new AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(this, "crawl_options");
    get crawlOptions() {
        return this._crawlOptions;
    }
    putCrawlOptions(value) {
        this._crawlOptions.internalValue = value;
    }
    resetCrawlOptions() {
        this._crawlOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get crawlOptionsInput() {
        return this._crawlOptions.internalValue;
    }
    // parse_options - computed: true, optional: true, required: false
    _parseOptions = new AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(this, "parse_options");
    get parseOptions() {
        return this._parseOptions;
    }
    putParseOptions(value) {
        this._parseOptions.internalValue = value;
    }
    resetParseOptions() {
        this._parseOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parseOptionsInput() {
        return this._parseOptions.internalValue;
    }
    // parse_type - computed: true, optional: true, required: false
    _parseType;
    get parseType() {
        return this.getStringAttribute('parse_type');
    }
    set parseType(value) {
        this._parseType = value;
    }
    resetParseType() {
        this._parseType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parseTypeInput() {
        return this._parseType;
    }
    // store_options - computed: true, optional: true, required: false
    _storeOptions = new AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(this, "store_options");
    get storeOptions() {
        return this._storeOptions;
    }
    putStoreOptions(value) {
        this._storeOptions.internalValue = value;
    }
    resetStoreOptions() {
        this._storeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storeOptionsInput() {
        return this._storeOptions.internalValue;
    }
}
export function aiSearchInstanceSourceParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.excludeItems),
        include_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.includeItems),
        prefix: cdktf.stringToTerraform(struct.prefix),
        r2_jurisdiction: cdktf.stringToTerraform(struct.r2Jurisdiction),
        web_crawler: aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct.webCrawler),
    };
}
export function aiSearchInstanceSourceParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        exclude_items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.excludeItems),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include_items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.includeItems),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        r2_jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.r2Jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_crawler: {
            value: aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct.webCrawler),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawler",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AiSearchInstanceSourceParamsOutputReference extends cdktf.ComplexObject {
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
        if (this._excludeItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeItems = this._excludeItems;
        }
        if (this._includeItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeItems = this._includeItems;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._r2Jurisdiction !== undefined) {
            hasAnyValues = true;
            internalValueResult.r2Jurisdiction = this._r2Jurisdiction;
        }
        if (this._webCrawler?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webCrawler = this._webCrawler?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeItems = undefined;
            this._includeItems = undefined;
            this._prefix = undefined;
            this._r2Jurisdiction = undefined;
            this._webCrawler.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeItems = value.excludeItems;
            this._includeItems = value.includeItems;
            this._prefix = value.prefix;
            this._r2Jurisdiction = value.r2Jurisdiction;
            this._webCrawler.internalValue = value.webCrawler;
        }
    }
    // exclude_items - computed: true, optional: true, required: false
    _excludeItems;
    get excludeItems() {
        return this.getListAttribute('exclude_items');
    }
    set excludeItems(value) {
        this._excludeItems = value;
    }
    resetExcludeItems() {
        this._excludeItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeItemsInput() {
        return this._excludeItems;
    }
    // include_items - computed: true, optional: true, required: false
    _includeItems;
    get includeItems() {
        return this.getListAttribute('include_items');
    }
    set includeItems(value) {
        this._includeItems = value;
    }
    resetIncludeItems() {
        this._includeItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeItemsInput() {
        return this._includeItems;
    }
    // prefix - computed: true, optional: true, required: false
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
    // r2_jurisdiction - computed: true, optional: true, required: false
    _r2Jurisdiction;
    get r2Jurisdiction() {
        return this.getStringAttribute('r2_jurisdiction');
    }
    set r2Jurisdiction(value) {
        this._r2Jurisdiction = value;
    }
    resetR2Jurisdiction() {
        this._r2Jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get r2JurisdictionInput() {
        return this._r2Jurisdiction;
    }
    // web_crawler - computed: true, optional: true, required: false
    _webCrawler = new AiSearchInstanceSourceParamsWebCrawlerOutputReference(this, "web_crawler");
    get webCrawler() {
        return this._webCrawler;
    }
    putWebCrawler(value) {
        this._webCrawler.internalValue = value;
    }
    resetWebCrawler() {
        this._webCrawler.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webCrawlerInput() {
        return this._webCrawler.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}
*/
export class AiSearchInstance extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ai_search_instance";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiSearchInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiSearchInstance to import
    * @param importFromId The id of the existing AiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiSearchInstance to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instance", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance cloudflare_ai_search_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiSearchInstanceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ai_search_instance',
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
        this._aiGatewayId = config.aiGatewayId;
        this._aisearchModel = config.aisearchModel;
        this._cache = config.cache;
        this._cacheThreshold = config.cacheThreshold;
        this._chunk = config.chunk;
        this._chunkOverlap = config.chunkOverlap;
        this._chunkSize = config.chunkSize;
        this._customMetadata.internalValue = config.customMetadata;
        this._embeddingModel = config.embeddingModel;
        this._fusionMethod = config.fusionMethod;
        this._hybridSearchEnabled = config.hybridSearchEnabled;
        this._id = config.id;
        this._indexMethod.internalValue = config.indexMethod;
        this._indexingOptions.internalValue = config.indexingOptions;
        this._maxNumResults = config.maxNumResults;
        this._metadata.internalValue = config.metadata;
        this._paused = config.paused;
        this._publicEndpointParams.internalValue = config.publicEndpointParams;
        this._reranking = config.reranking;
        this._rerankingModel = config.rerankingModel;
        this._retrievalOptions.internalValue = config.retrievalOptions;
        this._rewriteModel = config.rewriteModel;
        this._rewriteQuery = config.rewriteQuery;
        this._scoreThreshold = config.scoreThreshold;
        this._source = config.source;
        this._sourceParams.internalValue = config.sourceParams;
        this._summarization = config.summarization;
        this._summarizationModel = config.summarizationModel;
        this._syncInterval = config.syncInterval;
        this._systemPromptAisearch = config.systemPromptAisearch;
        this._systemPromptIndexSummarization = config.systemPromptIndexSummarization;
        this._systemPromptRewriteQuery = config.systemPromptRewriteQuery;
        this._tokenId = config.tokenId;
        this._type = config.type;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // ai_gateway_id - computed: true, optional: true, required: false
    _aiGatewayId;
    get aiGatewayId() {
        return this.getStringAttribute('ai_gateway_id');
    }
    set aiGatewayId(value) {
        this._aiGatewayId = value;
    }
    resetAiGatewayId() {
        this._aiGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiGatewayIdInput() {
        return this._aiGatewayId;
    }
    // aisearch_model - computed: true, optional: true, required: false
    _aisearchModel;
    get aisearchModel() {
        return this.getStringAttribute('aisearch_model');
    }
    set aisearchModel(value) {
        this._aisearchModel = value;
    }
    resetAisearchModel() {
        this._aisearchModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aisearchModelInput() {
        return this._aisearchModel;
    }
    // cache - computed: true, optional: true, required: false
    _cache;
    get cache() {
        return this.getBooleanAttribute('cache');
    }
    set cache(value) {
        this._cache = value;
    }
    resetCache() {
        this._cache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheInput() {
        return this._cache;
    }
    // cache_threshold - computed: true, optional: true, required: false
    _cacheThreshold;
    get cacheThreshold() {
        return this.getStringAttribute('cache_threshold');
    }
    set cacheThreshold(value) {
        this._cacheThreshold = value;
    }
    resetCacheThreshold() {
        this._cacheThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheThresholdInput() {
        return this._cacheThreshold;
    }
    // chunk - computed: true, optional: true, required: false
    _chunk;
    get chunk() {
        return this.getBooleanAttribute('chunk');
    }
    set chunk(value) {
        this._chunk = value;
    }
    resetChunk() {
        this._chunk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get chunkInput() {
        return this._chunk;
    }
    // chunk_overlap - computed: true, optional: true, required: false
    _chunkOverlap;
    get chunkOverlap() {
        return this.getNumberAttribute('chunk_overlap');
    }
    set chunkOverlap(value) {
        this._chunkOverlap = value;
    }
    resetChunkOverlap() {
        this._chunkOverlap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get chunkOverlapInput() {
        return this._chunkOverlap;
    }
    // chunk_size - computed: true, optional: true, required: false
    _chunkSize;
    get chunkSize() {
        return this.getNumberAttribute('chunk_size');
    }
    set chunkSize(value) {
        this._chunkSize = value;
    }
    resetChunkSize() {
        this._chunkSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get chunkSizeInput() {
        return this._chunkSize;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // created_by - computed: true, optional: false, required: false
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    // custom_metadata - computed: false, optional: true, required: false
    _customMetadata = new AiSearchInstanceCustomMetadataList(this, "custom_metadata", false);
    get customMetadata() {
        return this._customMetadata;
    }
    putCustomMetadata(value) {
        this._customMetadata.internalValue = value;
    }
    resetCustomMetadata() {
        this._customMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customMetadataInput() {
        return this._customMetadata.internalValue;
    }
    // embedding_model - computed: true, optional: true, required: false
    _embeddingModel;
    get embeddingModel() {
        return this.getStringAttribute('embedding_model');
    }
    set embeddingModel(value) {
        this._embeddingModel = value;
    }
    resetEmbeddingModel() {
        this._embeddingModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get embeddingModelInput() {
        return this._embeddingModel;
    }
    // enable - computed: true, optional: false, required: false
    get enable() {
        return this.getBooleanAttribute('enable');
    }
    // engine_version - computed: true, optional: false, required: false
    get engineVersion() {
        return this.getNumberAttribute('engine_version');
    }
    // fusion_method - computed: true, optional: true, required: false
    _fusionMethod;
    get fusionMethod() {
        return this.getStringAttribute('fusion_method');
    }
    set fusionMethod(value) {
        this._fusionMethod = value;
    }
    resetFusionMethod() {
        this._fusionMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fusionMethodInput() {
        return this._fusionMethod;
    }
    // hybrid_search_enabled - computed: true, optional: true, required: false
    _hybridSearchEnabled;
    get hybridSearchEnabled() {
        return this.getBooleanAttribute('hybrid_search_enabled');
    }
    set hybridSearchEnabled(value) {
        this._hybridSearchEnabled = value;
    }
    resetHybridSearchEnabled() {
        this._hybridSearchEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hybridSearchEnabledInput() {
        return this._hybridSearchEnabled;
    }
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // index_method - computed: true, optional: true, required: false
    _indexMethod = new AiSearchInstanceIndexMethodOutputReference(this, "index_method");
    get indexMethod() {
        return this._indexMethod;
    }
    putIndexMethod(value) {
        this._indexMethod.internalValue = value;
    }
    resetIndexMethod() {
        this._indexMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get indexMethodInput() {
        return this._indexMethod.internalValue;
    }
    // indexing_options - computed: true, optional: true, required: false
    _indexingOptions = new AiSearchInstanceIndexingOptionsOutputReference(this, "indexing_options");
    get indexingOptions() {
        return this._indexingOptions;
    }
    putIndexingOptions(value) {
        this._indexingOptions.internalValue = value;
    }
    resetIndexingOptions() {
        this._indexingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get indexingOptionsInput() {
        return this._indexingOptions.internalValue;
    }
    // last_activity - computed: true, optional: false, required: false
    get lastActivity() {
        return this.getStringAttribute('last_activity');
    }
    // max_num_results - computed: true, optional: true, required: false
    _maxNumResults;
    get maxNumResults() {
        return this.getNumberAttribute('max_num_results');
    }
    set maxNumResults(value) {
        this._maxNumResults = value;
    }
    resetMaxNumResults() {
        this._maxNumResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxNumResultsInput() {
        return this._maxNumResults;
    }
    // metadata - computed: false, optional: true, required: false
    _metadata = new AiSearchInstanceMetadataOutputReference(this, "metadata");
    get metadata() {
        return this._metadata;
    }
    putMetadata(value) {
        this._metadata.internalValue = value;
    }
    resetMetadata() {
        this._metadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata.internalValue;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // modified_by - computed: true, optional: false, required: false
    get modifiedBy() {
        return this.getStringAttribute('modified_by');
    }
    // namespace - computed: true, optional: false, required: false
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    // paused - computed: true, optional: true, required: false
    _paused;
    get paused() {
        return this.getBooleanAttribute('paused');
    }
    set paused(value) {
        this._paused = value;
    }
    resetPaused() {
        this._paused = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pausedInput() {
        return this._paused;
    }
    // public_endpoint_id - computed: true, optional: false, required: false
    get publicEndpointId() {
        return this.getStringAttribute('public_endpoint_id');
    }
    // public_endpoint_params - computed: true, optional: true, required: false
    _publicEndpointParams = new AiSearchInstancePublicEndpointParamsOutputReference(this, "public_endpoint_params");
    get publicEndpointParams() {
        return this._publicEndpointParams;
    }
    putPublicEndpointParams(value) {
        this._publicEndpointParams.internalValue = value;
    }
    resetPublicEndpointParams() {
        this._publicEndpointParams.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicEndpointParamsInput() {
        return this._publicEndpointParams.internalValue;
    }
    // reranking - computed: true, optional: true, required: false
    _reranking;
    get reranking() {
        return this.getBooleanAttribute('reranking');
    }
    set reranking(value) {
        this._reranking = value;
    }
    resetReranking() {
        this._reranking = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rerankingInput() {
        return this._reranking;
    }
    // reranking_model - computed: true, optional: true, required: false
    _rerankingModel;
    get rerankingModel() {
        return this.getStringAttribute('reranking_model');
    }
    set rerankingModel(value) {
        this._rerankingModel = value;
    }
    resetRerankingModel() {
        this._rerankingModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rerankingModelInput() {
        return this._rerankingModel;
    }
    // retrieval_options - computed: true, optional: true, required: false
    _retrievalOptions = new AiSearchInstanceRetrievalOptionsOutputReference(this, "retrieval_options");
    get retrievalOptions() {
        return this._retrievalOptions;
    }
    putRetrievalOptions(value) {
        this._retrievalOptions.internalValue = value;
    }
    resetRetrievalOptions() {
        this._retrievalOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retrievalOptionsInput() {
        return this._retrievalOptions.internalValue;
    }
    // rewrite_model - computed: true, optional: true, required: false
    _rewriteModel;
    get rewriteModel() {
        return this.getStringAttribute('rewrite_model');
    }
    set rewriteModel(value) {
        this._rewriteModel = value;
    }
    resetRewriteModel() {
        this._rewriteModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rewriteModelInput() {
        return this._rewriteModel;
    }
    // rewrite_query - computed: true, optional: true, required: false
    _rewriteQuery;
    get rewriteQuery() {
        return this.getBooleanAttribute('rewrite_query');
    }
    set rewriteQuery(value) {
        this._rewriteQuery = value;
    }
    resetRewriteQuery() {
        this._rewriteQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rewriteQueryInput() {
        return this._rewriteQuery;
    }
    // score_threshold - computed: true, optional: true, required: false
    _scoreThreshold;
    get scoreThreshold() {
        return this.getNumberAttribute('score_threshold');
    }
    set scoreThreshold(value) {
        this._scoreThreshold = value;
    }
    resetScoreThreshold() {
        this._scoreThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scoreThresholdInput() {
        return this._scoreThreshold;
    }
    // source - computed: false, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // source_params - computed: true, optional: true, required: false
    _sourceParams = new AiSearchInstanceSourceParamsOutputReference(this, "source_params");
    get sourceParams() {
        return this._sourceParams;
    }
    putSourceParams(value) {
        this._sourceParams.internalValue = value;
    }
    resetSourceParams() {
        this._sourceParams.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceParamsInput() {
        return this._sourceParams.internalValue;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // summarization - computed: true, optional: true, required: false
    _summarization;
    get summarization() {
        return this.getBooleanAttribute('summarization');
    }
    set summarization(value) {
        this._summarization = value;
    }
    resetSummarization() {
        this._summarization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get summarizationInput() {
        return this._summarization;
    }
    // summarization_model - computed: false, optional: true, required: false
    _summarizationModel;
    get summarizationModel() {
        return this.getStringAttribute('summarization_model');
    }
    set summarizationModel(value) {
        this._summarizationModel = value;
    }
    resetSummarizationModel() {
        this._summarizationModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get summarizationModelInput() {
        return this._summarizationModel;
    }
    // sync_interval - computed: true, optional: true, required: false
    _syncInterval;
    get syncInterval() {
        return this.getNumberAttribute('sync_interval');
    }
    set syncInterval(value) {
        this._syncInterval = value;
    }
    resetSyncInterval() {
        this._syncInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get syncIntervalInput() {
        return this._syncInterval;
    }
    // system_prompt_aisearch - computed: false, optional: true, required: false
    _systemPromptAisearch;
    get systemPromptAisearch() {
        return this.getStringAttribute('system_prompt_aisearch');
    }
    set systemPromptAisearch(value) {
        this._systemPromptAisearch = value;
    }
    resetSystemPromptAisearch() {
        this._systemPromptAisearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get systemPromptAisearchInput() {
        return this._systemPromptAisearch;
    }
    // system_prompt_index_summarization - computed: false, optional: true, required: false
    _systemPromptIndexSummarization;
    get systemPromptIndexSummarization() {
        return this.getStringAttribute('system_prompt_index_summarization');
    }
    set systemPromptIndexSummarization(value) {
        this._systemPromptIndexSummarization = value;
    }
    resetSystemPromptIndexSummarization() {
        this._systemPromptIndexSummarization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get systemPromptIndexSummarizationInput() {
        return this._systemPromptIndexSummarization;
    }
    // system_prompt_rewrite_query - computed: false, optional: true, required: false
    _systemPromptRewriteQuery;
    get systemPromptRewriteQuery() {
        return this.getStringAttribute('system_prompt_rewrite_query');
    }
    set systemPromptRewriteQuery(value) {
        this._systemPromptRewriteQuery = value;
    }
    resetSystemPromptRewriteQuery() {
        this._systemPromptRewriteQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get systemPromptRewriteQueryInput() {
        return this._systemPromptRewriteQuery;
    }
    // token_id - computed: false, optional: true, required: false
    _tokenId;
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    set tokenId(value) {
        this._tokenId = value;
    }
    resetTokenId() {
        this._tokenId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenIdInput() {
        return this._tokenId;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // vectorize_name - computed: true, optional: false, required: false
    get vectorizeName() {
        return this.getStringAttribute('vectorize_name');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_gateway_id: cdktf.stringToTerraform(this._aiGatewayId),
            aisearch_model: cdktf.stringToTerraform(this._aisearchModel),
            cache: cdktf.booleanToTerraform(this._cache),
            cache_threshold: cdktf.stringToTerraform(this._cacheThreshold),
            chunk: cdktf.booleanToTerraform(this._chunk),
            chunk_overlap: cdktf.numberToTerraform(this._chunkOverlap),
            chunk_size: cdktf.numberToTerraform(this._chunkSize),
            custom_metadata: cdktf.listMapper(aiSearchInstanceCustomMetadataToTerraform, false)(this._customMetadata.internalValue),
            embedding_model: cdktf.stringToTerraform(this._embeddingModel),
            fusion_method: cdktf.stringToTerraform(this._fusionMethod),
            hybrid_search_enabled: cdktf.booleanToTerraform(this._hybridSearchEnabled),
            id: cdktf.stringToTerraform(this._id),
            index_method: aiSearchInstanceIndexMethodToTerraform(this._indexMethod.internalValue),
            indexing_options: aiSearchInstanceIndexingOptionsToTerraform(this._indexingOptions.internalValue),
            max_num_results: cdktf.numberToTerraform(this._maxNumResults),
            metadata: aiSearchInstanceMetadataToTerraform(this._metadata.internalValue),
            paused: cdktf.booleanToTerraform(this._paused),
            public_endpoint_params: aiSearchInstancePublicEndpointParamsToTerraform(this._publicEndpointParams.internalValue),
            reranking: cdktf.booleanToTerraform(this._reranking),
            reranking_model: cdktf.stringToTerraform(this._rerankingModel),
            retrieval_options: aiSearchInstanceRetrievalOptionsToTerraform(this._retrievalOptions.internalValue),
            rewrite_model: cdktf.stringToTerraform(this._rewriteModel),
            rewrite_query: cdktf.booleanToTerraform(this._rewriteQuery),
            score_threshold: cdktf.numberToTerraform(this._scoreThreshold),
            source: cdktf.stringToTerraform(this._source),
            source_params: aiSearchInstanceSourceParamsToTerraform(this._sourceParams.internalValue),
            summarization: cdktf.booleanToTerraform(this._summarization),
            summarization_model: cdktf.stringToTerraform(this._summarizationModel),
            sync_interval: cdktf.numberToTerraform(this._syncInterval),
            system_prompt_aisearch: cdktf.stringToTerraform(this._systemPromptAisearch),
            system_prompt_index_summarization: cdktf.stringToTerraform(this._systemPromptIndexSummarization),
            system_prompt_rewrite_query: cdktf.stringToTerraform(this._systemPromptRewriteQuery),
            token_id: cdktf.stringToTerraform(this._tokenId),
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
            ai_gateway_id: {
                value: cdktf.stringToHclTerraform(this._aiGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aisearch_model: {
                value: cdktf.stringToHclTerraform(this._aisearchModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cache: {
                value: cdktf.booleanToHclTerraform(this._cache),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_threshold: {
                value: cdktf.stringToHclTerraform(this._cacheThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            chunk: {
                value: cdktf.booleanToHclTerraform(this._chunk),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            chunk_overlap: {
                value: cdktf.numberToHclTerraform(this._chunkOverlap),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            chunk_size: {
                value: cdktf.numberToHclTerraform(this._chunkSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            custom_metadata: {
                value: cdktf.listMapperHcl(aiSearchInstanceCustomMetadataToHclTerraform, false)(this._customMetadata.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AiSearchInstanceCustomMetadataList",
            },
            embedding_model: {
                value: cdktf.stringToHclTerraform(this._embeddingModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fusion_method: {
                value: cdktf.stringToHclTerraform(this._fusionMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hybrid_search_enabled: {
                value: cdktf.booleanToHclTerraform(this._hybridSearchEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            index_method: {
                value: aiSearchInstanceIndexMethodToHclTerraform(this._indexMethod.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceIndexMethod",
            },
            indexing_options: {
                value: aiSearchInstanceIndexingOptionsToHclTerraform(this._indexingOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceIndexingOptions",
            },
            max_num_results: {
                value: cdktf.numberToHclTerraform(this._maxNumResults),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metadata: {
                value: aiSearchInstanceMetadataToHclTerraform(this._metadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceMetadata",
            },
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            public_endpoint_params: {
                value: aiSearchInstancePublicEndpointParamsToHclTerraform(this._publicEndpointParams.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstancePublicEndpointParams",
            },
            reranking: {
                value: cdktf.booleanToHclTerraform(this._reranking),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            reranking_model: {
                value: cdktf.stringToHclTerraform(this._rerankingModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retrieval_options: {
                value: aiSearchInstanceRetrievalOptionsToHclTerraform(this._retrievalOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceRetrievalOptions",
            },
            rewrite_model: {
                value: cdktf.stringToHclTerraform(this._rewriteModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rewrite_query: {
                value: cdktf.booleanToHclTerraform(this._rewriteQuery),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            score_threshold: {
                value: cdktf.numberToHclTerraform(this._scoreThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            source: {
                value: cdktf.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_params: {
                value: aiSearchInstanceSourceParamsToHclTerraform(this._sourceParams.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceSourceParams",
            },
            summarization: {
                value: cdktf.booleanToHclTerraform(this._summarization),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            summarization_model: {
                value: cdktf.stringToHclTerraform(this._summarizationModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_interval: {
                value: cdktf.numberToHclTerraform(this._syncInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            system_prompt_aisearch: {
                value: cdktf.stringToHclTerraform(this._systemPromptAisearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            system_prompt_index_summarization: {
                value: cdktf.stringToHclTerraform(this._systemPromptIndexSummarization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            system_prompt_rewrite_query: {
                value: cdktf.stringToHclTerraform(this._systemPromptRewriteQuery),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_id: {
                value: cdktf.stringToHclTerraform(this._tokenId),
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
