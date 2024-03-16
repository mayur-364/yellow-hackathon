#load ".\MetaConstants\Feature.BlueYonder.csx"
#load ".\MetaConstants\Foundation.BlueYonder.csx"
#load ".\MetaConstants\Project.BlueYonder.csx"

using System;

/// <summary>
/// Add logic for if we know what type of item a field is referencing.
/// Returning an array in case there are multiple types of items that are allowed.
/// Calling code will automatically handle whether it is a single or multiselect.
/// </summary>
/// <param name="field">The field we are checking</param>
/// <returns></returns>
public TypeData[] GetCustomFieldItemType(TemplateFieldCodeGenerationMetadata field)
{ return null;
}


/// <summary>
/// Add logic for if we know what type of child items we are expecting for a template.
/// Returning an array in case there are multiple types of items that are allowed.
/// Calling code will automatically handle whether it is a single or multiselect.
/// </summary>
/// <param name="template">The template we are getting child item types for</param>
/// <returns></returns>
public TypeData[] GetCustomChildrenItemType(TemplateCodeGenerationMetadata template)
{
 return null;
}