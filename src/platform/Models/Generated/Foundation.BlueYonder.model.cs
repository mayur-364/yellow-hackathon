// ReSharper Disable all
using global::Sitecore.Data;
using global::Sitecore.Data.Fields;
using global::Sitecore.Data.Items;
using global::System.CodeDom.Compiler;

namespace Platform.Models.Generated.Foundation.BlueYonder.BaseFields
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ICtaItem
	{
		LinkField CtaLinkField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Cta : CustomItem, ICtaItem
	{
		public Cta(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "_CTA";
		public static ID ItemTemplateId => new ID("{0AF677CB-7291-4FFF-A324-A81383648BF3}");
		
		public LinkField CtaLinkField => new LinkField(InnerItem.Fields[FieldConstants.CtaLink.Id]);
		public static implicit operator Cta(Item item) => item != null ? new Cta(item) : null;
		public static implicit operator Item(Cta customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct CtaLink
            {
		        public const string FieldName = "ctaLink";
		        public static readonly ID Id = new ID("{49AF83D1-AD15-463E-8A7C-49F67DCBFA0D}");
            }
            
		}
	}
}

namespace Platform.Models.Generated.Foundation.BlueYonder.BaseFields
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ILogoItem
	{
		ImageField LogoImageField { get; }
		LinkField LogoUrlField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Logo : CustomItem, ILogoItem
	{
		public Logo(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "_Logo";
		public static ID ItemTemplateId => new ID("{5D7DA26F-8D4B-4243-B25F-FDFEA795F7A5}");
		
		public ImageField LogoImageField => new ImageField(InnerItem.Fields[FieldConstants.LogoImage.Id]);
		public LinkField LogoUrlField => new LinkField(InnerItem.Fields[FieldConstants.LogoUrl.Id]);
		public static implicit operator Logo(Item item) => item != null ? new Logo(item) : null;
		public static implicit operator Item(Logo customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct LogoImage
            {
		        public const string FieldName = "logoImage";
		        public static readonly ID Id = new ID("{0F31A173-07E6-438B-BFE4-C24F2138C8BC}");
            }
            public struct LogoUrl
            {
		        public const string FieldName = "logoUrl";
		        public static readonly ID Id = new ID("{5C02333E-3F4C-4DDC-A086-646DCB4F2DF3}");
            }
            
		}
	}
}

namespace Platform.Models.Generated.Foundation.BlueYonder.BaseFields
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPrimaryNavigationItem
	{
		LinkField NavigationLinkField { get; }
		TextField NavigationTitleField { get; }
		MultilistField SecondaryNavigationsField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class PrimaryNavigation : CustomItem, IPrimaryNavigationItem
	{
		public PrimaryNavigation(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "_Primary Navigation";
		public static ID ItemTemplateId => new ID("{3683B1C1-1225-48D4-BC0B-28F0F73FD40C}");
		
		public LinkField NavigationLinkField => new LinkField(InnerItem.Fields[FieldConstants.NavigationLink.Id]);
		public TextField NavigationTitleField => new TextField(InnerItem.Fields[FieldConstants.NavigationTitle.Id]);
		public MultilistField SecondaryNavigationsField => new MultilistField(InnerItem.Fields[FieldConstants.SecondaryNavigations.Id]);
		public static implicit operator PrimaryNavigation(Item item) => item != null ? new PrimaryNavigation(item) : null;
		public static implicit operator Item(PrimaryNavigation customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct NavigationLink
            {
		        public const string FieldName = "navigationLink";
		        public static readonly ID Id = new ID("{A4CEFEF3-DCB5-4FB0-8299-9A1E5F74110F}");
            }
            public struct NavigationTitle
            {
		        public const string FieldName = "navigationTitle";
		        public static readonly ID Id = new ID("{90C50DEC-ED13-4BE1-8050-EF2DA8838403}");
            }
            public struct SecondaryNavigations
            {
		        public const string FieldName = "secondaryNavigations";
		        public static readonly ID Id = new ID("{8AB49F36-DD90-4CCE-BAB7-D49DC5C2B9E5}");
            }
            
		}
	}
}


