using System.Linq;

public class TypeData 
{
    public string JssTypeName { get; set; }
    public string ShortRootNameSpace { get; set; }
    public string NameSpaceAlias { get; set; }
    public string Module { get; set; }
    public string Layer { get; set; }
}

public string GetAliasedFullCodeName(TemplateCodeGenerationMetadata template, string suffix = "")
{
    var originalNameSpace = string.IsNullOrWhiteSpace(template.RelativeNamespace) ? template.Namespace : template.RelativeNamespace;
    var nameSpace = originalNameSpace.Replace(GetShortNameSpaceRoot(template), GetNameSpaceAlias(template));
    return $@"{nameSpace}.{template.CodeName}{suffix}";
}

public string GetFieldCodeName(TemplateFieldCodeGenerationMetadata field, string suffix = "")
{
    // Check if field name needs to be quoted and add quotes as needed
    var name = System.Text.RegularExpressions.Regex.IsMatch(field.Name, "[ -]+") ? $"\"{field.Name}{suffix}\"" : field.Name + suffix;
    return name;
}


public string GetNameSpaceAlias(TemplateCodeGenerationMetadata template)
{
    var split = template.RootNamespace.Split('.');
    var layer = split[0];
    var module = split[1];

    var currNamespace = GetShortNameSpaceRoot(template);

    return $@"{layer}{module}{currNamespace}";
}

public string GetShortNameSpaceRoot(TemplateCodeGenerationMetadata template)
{
    var currNamespace = GetShortNameSpace(template).Split('.').First();
    return currNamespace;
}

public string GetShortNameSpace(TemplateCodeGenerationMetadata template)
{
    var shortNameSpace = template.RelativeNamespace;

    if (string.IsNullOrWhiteSpace(shortNameSpace))
    {
        return template.Namespace;
    }
    return shortNameSpace;
}

public bool IsOrInheritsFromTemplate(TemplateCodeGenerationMetadata template, string templateId)
{
    var isTemplate = template.Id == System.Guid.Parse(templateId);

    if (isTemplate)
    {
        return true;
    }

    foreach (var baseTemplate in template.BaseTemplates)
    {
        if (IsOrInheritsFromTemplate(baseTemplate, templateId))
        {
            return true;
        }
    }

    return false;
}
