#load "Utilities.csx"

using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;


Log.Debug($"Emitting meta constants for {ConfigurationName}...");


Code.AppendLine($@"// ReSharper Disable all
#load ""..\Utilities.csx""

using global::System.CodeDom.Compiler;
using System;

");
RenderTemplates(Code);

public class WriteNamespaceFragmentAsClass : IDisposable
{
    private IEnumerable<string> _nameSpaces;
    private StringBuilder builder;
    public int indent = 0;
    public WriteNamespaceFragmentAsClass(string nameSpace, StringBuilder builder)
    {
        this._nameSpaces = nameSpace.Split('.').ToList();
        this.builder = builder;
        foreach (var ns in _nameSpaces)
        {
            builder.Append($@"
{string.Join("", Enumerable.Repeat("  ", indent))}public partial class {ns} 
{string.Join("", Enumerable.Repeat("  ", indent))}{{");
            indent++;
        }
    }
    public void Dispose()
    {
        foreach (var ns in _nameSpaces.Reverse())
        {
            indent--;
            builder.Append($@" 
{string.Join("", Enumerable.Repeat("  ", indent))}}}");
        }
    }
}

public void RenderTemplates(StringBuilder builder)
{

    // var builder = new StringBuilder();
    foreach (var template in Templates.OrderBy(x => x.FullTypeName))
    {
        using (var fragment = new WriteNamespaceFragmentAsClass(template.Namespace, builder))
        {
            
            var split = template.RootNamespace.Split('.');
            var layer = split[0];
            var module = split[1];

            builder.Append($@"
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}[GeneratedCode(""Leprechaun"", ""2.0.0.0"")]
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}public class _{template.CodeName}
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}{{
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  public const string TemplateName = ""{template.Name}"";
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  public static TypeData TypeData = new TypeData() 
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  {{
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}     JssTypeName = ""{GetAliasedFullCodeName(template)}"",
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}     ShortRootNameSpace = ""{GetShortNameSpaceRoot(template)}"",
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}     NameSpaceAlias = ""{GetNameSpaceAlias(template)}"",
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}     Module = ""{module}"",
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}     Layer = ""{layer}"",
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  }};
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  public static Guid ItemTemplateId => new Guid(""{template.Id.ToString("B").ToUpper()}"");
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  public const string ItemTemplateIdString = ""{template.Id.ToString("B").ToUpper()}"";
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  public struct FieldConstants
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  {{
{RenderFieldConstants(template, fragment.indent + 2)}
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}  }}
{string.Join("", Enumerable.Repeat("  ", fragment.indent))}}}");
        }

    }

    // return builder;
}


public string RenderFieldConstants(TemplateCodeGenerationMetadata template, int indent)
{
    var localCode = new System.Text.StringBuilder();

    foreach (var field in template.AllFields)
    {
        localCode.Append($@"
{string.Join("", Enumerable.Repeat("  ", indent))}public struct {field.CodeName}
{string.Join("", Enumerable.Repeat("  ", indent))}{{
{string.Join("", Enumerable.Repeat("  ", indent))}  public const string FieldName = ""{field.Name}"";
{string.Join("", Enumerable.Repeat("  ", indent))}  public static readonly Guid Id = new Guid(""{field.Id.ToString("B").ToUpper()}"");
{string.Join("", Enumerable.Repeat("  ", indent))}  public const string IdString = ""{field.Id.ToString("B").ToUpper()}"";
            }}
            ");
    }

    return localCode.ToString();
}

