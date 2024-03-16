// ReSharper Disable all
using global::Sitecore.Data;
using global::Sitecore.Data.Fields;
using global::Sitecore.Data.Items;
using global::System.CodeDom.Compiler;

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Footer
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IFooterItem : global::Platform.Models.Generated.Foundation.BlueYonder.BaseFields.ILogoItem
	{
		TextField ContactTitleField { get; }
		TextField CopyRightTextField { get; }
		MultilistField GeneralLinksField { get; }
		MultilistField LegalLinksField { get; }
		LinkField PhoneNumberField { get; }
		MultilistField SocialLinksField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Footer : CustomItem, IFooterItem
	{
		public Footer(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Footer";
		public static ID ItemTemplateId => new ID("{BE825819-E2EA-4E2D-A00F-75FFAAECA1C8}");
		
		public TextField ContactTitleField => new TextField(InnerItem.Fields[FieldConstants.ContactTitle.Id]);
		public TextField CopyRightTextField => new TextField(InnerItem.Fields[FieldConstants.CopyRightText.Id]);
		public MultilistField GeneralLinksField => new MultilistField(InnerItem.Fields[FieldConstants.GeneralLinks.Id]);
		public MultilistField LegalLinksField => new MultilistField(InnerItem.Fields[FieldConstants.LegalLinks.Id]);
		public LinkField PhoneNumberField => new LinkField(InnerItem.Fields[FieldConstants.PhoneNumber.Id]);
		public MultilistField SocialLinksField => new MultilistField(InnerItem.Fields[FieldConstants.SocialLinks.Id]);
		public ImageField LogoImageField => new ImageField(InnerItem.Fields[FieldConstants.LogoImage.Id]);
		public LinkField LogoUrlField => new LinkField(InnerItem.Fields[FieldConstants.LogoUrl.Id]);
		public static implicit operator Footer(Item item) => item != null ? new Footer(item) : null;
		public static implicit operator Item(Footer customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct ContactTitle
            {
		        public const string FieldName = "contactTitle";
		        public static readonly ID Id = new ID("{7F3DBB4D-073B-4BAD-92DB-B1F64E5B648B}");
            }
            public struct CopyRightText
            {
		        public const string FieldName = "copyRightText";
		        public static readonly ID Id = new ID("{F25AA45E-3EB8-4F6A-873E-DF369FB31BA9}");
            }
            public struct GeneralLinks
            {
		        public const string FieldName = "generalLinks";
		        public static readonly ID Id = new ID("{DCA3AACB-F281-433E-A87C-3A7DF429930C}");
            }
            public struct LegalLinks
            {
		        public const string FieldName = "legalLinks";
		        public static readonly ID Id = new ID("{B056D402-6345-4A44-8D23-E424A1E7947A}");
            }
            public struct PhoneNumber
            {
		        public const string FieldName = "phoneNumber";
		        public static readonly ID Id = new ID("{2A244A8A-7EFD-4035-B3BE-DA2DF1A8FB03}");
            }
            public struct SocialLinks
            {
		        public const string FieldName = "socialLinks";
		        public static readonly ID Id = new ID("{D24CD667-D512-4D70-9532-425FED21B2EE}");
            }
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

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Footer
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IFooterFolderItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class FooterFolder : CustomItem, IFooterFolderItem
	{
		public FooterFolder(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Footer Folder";
		public static ID ItemTemplateId => new ID("{8FDC1A9C-DC9D-4B04-A9C0-0A3ABDEDE628}");
		
		public static implicit operator FooterFolder(Item item) => item != null ? new FooterFolder(item) : null;
		public static implicit operator Item(FooterFolder customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IHeaderItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Header : CustomItem, IHeaderItem
	{
		public Header(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Header";
		public static ID ItemTemplateId => new ID("{C381B5E8-B265-412C-8C6E-A46710A71B23}");
		
		public static implicit operator Header(Item item) => item != null ? new Header(item) : null;
		public static implicit operator Item(Header customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Navigation
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ILinkItem : global::Platform.Models.Generated.Foundation.BlueYonder.BaseFields.ICtaItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Link : CustomItem, ILinkItem
	{
		public Link(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Link";
		public static ID ItemTemplateId => new ID("{B54B8FB4-81E5-424B-80C4-DA847CE37933}");
		
		public LinkField CtaLinkField => new LinkField(InnerItem.Fields[FieldConstants.CtaLink.Id]);
		public static implicit operator Link(Item item) => item != null ? new Link(item) : null;
		public static implicit operator Item(Link customItem) => customItem?.InnerItem;
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

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Navigation
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ILinkFolderItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class LinkFolder : CustomItem, ILinkFolderItem
	{
		public LinkFolder(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Link Folder";
		public static ID ItemTemplateId => new ID("{1256C3B2-AEF8-46D8-9CD1-1097AF29BF01}");
		
		public static implicit operator LinkFolder(Item item) => item != null ? new LinkFolder(item) : null;
		public static implicit operator Item(LinkFolder customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Navigation
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPrimaryFooterNavigationItem : global::Platform.Models.Generated.Foundation.BlueYonder.BaseFields.IPrimaryNavigationItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class PrimaryFooterNavigation : CustomItem, IPrimaryFooterNavigationItem
	{
		public PrimaryFooterNavigation(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Primary Footer Navigation";
		public static ID ItemTemplateId => new ID("{EBE0A538-97C6-4B3B-868F-59A427B307E6}");
		
		public LinkField NavigationLinkField => new LinkField(InnerItem.Fields[FieldConstants.NavigationLink.Id]);
		public TextField NavigationTitleField => new TextField(InnerItem.Fields[FieldConstants.NavigationTitle.Id]);
		public MultilistField SecondaryNavigationsField => new MultilistField(InnerItem.Fields[FieldConstants.SecondaryNavigations.Id]);
		public static implicit operator PrimaryFooterNavigation(Item item) => item != null ? new PrimaryFooterNavigation(item) : null;
		public static implicit operator Item(PrimaryFooterNavigation customItem) => customItem?.InnerItem;
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

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Navigation
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ISecondaryNavigationItem
	{
		LinkField NavigationLinkField { get; }
		TextField NavigationTitleField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class SecondaryNavigation : CustomItem, ISecondaryNavigationItem
	{
		public SecondaryNavigation(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Secondary Navigation";
		public static ID ItemTemplateId => new ID("{FF569D64-3F86-4C36-B184-A1D467CC5778}");
		
		public LinkField NavigationLinkField => new LinkField(InnerItem.Fields[FieldConstants.NavigationLink.Id]);
		public TextField NavigationTitleField => new TextField(InnerItem.Fields[FieldConstants.NavigationTitle.Id]);
		public static implicit operator SecondaryNavigation(Item item) => item != null ? new SecondaryNavigation(item) : null;
		public static implicit operator Item(SecondaryNavigation customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct NavigationLink
            {
		        public const string FieldName = "navigationLink";
		        public static readonly ID Id = new ID("{F6267B83-8592-43AE-B05C-1DA8A07E94E2}");
            }
            public struct NavigationTitle
            {
		        public const string FieldName = "navigationTitle";
		        public static readonly ID Id = new ID("{27A8E854-6655-4C54-8B41-5E1368517300}");
            }
            
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Navigation
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ISocialLinkItem
	{
		ImageField SocialIconField { get; }
		LinkField SocialUrlField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class SocialLink : CustomItem, ISocialLinkItem
	{
		public SocialLink(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Social Link";
		public static ID ItemTemplateId => new ID("{A4C44ABE-9E8A-4D52-B2D1-0D78337A8AD5}");
		
		public ImageField SocialIconField => new ImageField(InnerItem.Fields[FieldConstants.SocialIcon.Id]);
		public LinkField SocialUrlField => new LinkField(InnerItem.Fields[FieldConstants.SocialUrl.Id]);
		public static implicit operator SocialLink(Item item) => item != null ? new SocialLink(item) : null;
		public static implicit operator Item(SocialLink customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct SocialIcon
            {
		        public const string FieldName = "socialIcon";
		        public static readonly ID Id = new ID("{C25059BB-C0A9-4E81-ADDE-3D54CF2C2504}");
            }
            public struct SocialUrl
            {
		        public const string FieldName = "socialUrl";
		        public static readonly ID Id = new ID("{DBF74438-326F-4624-9B56-54978CB20FE6}");
            }
            
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.Navigation
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ISocialLinkFolderItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class SocialLinkFolder : CustomItem, ISocialLinkFolderItem
	{
		public SocialLinkFolder(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Social Link Folder";
		public static ID ItemTemplateId => new ID("{4E2C5D24-B802-4A6E-B8B4-A6BCD13266D4}");
		
		public static implicit operator SocialLinkFolder(Item item) => item != null ? new SocialLinkFolder(item) : null;
		public static implicit operator Item(SocialLinkFolder customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.BaseComponents.RenderingParameters
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IFooterItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Footer : CustomItem, IFooterItem
	{
		public Footer(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Footer";
		public static ID ItemTemplateId => new ID("{228D0343-EA21-4866-AB67-BA22B62E1ABE}");
		
		public static implicit operator Footer(Item item) => item != null ? new Footer(item) : null;
		public static implicit operator Item(Footer customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Feature.BlueYonder.SiteSettings
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ICdnSettingsItem
	{
		TextField CdnCssField { get; }
		TextField CdnUrlField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class CdnSettings : CustomItem, ICdnSettingsItem
	{
		public CdnSettings(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "CDN Settings";
		public static ID ItemTemplateId => new ID("{9A25E5DF-B449-484C-9C3C-D3E03E7D6463}");
		
		public TextField CdnCssField => new TextField(InnerItem.Fields[FieldConstants.CdnCss.Id]);
		public TextField CdnUrlField => new TextField(InnerItem.Fields[FieldConstants.CdnUrl.Id]);
		public static implicit operator CdnSettings(Item item) => item != null ? new CdnSettings(item) : null;
		public static implicit operator Item(CdnSettings customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct CdnCss
            {
		        public const string FieldName = "cdnCss";
		        public static readonly ID Id = new ID("{C16FC3F7-8201-4E4D-93AB-6B52DC5E3CF3}");
            }
            public struct CdnUrl
            {
		        public const string FieldName = "cdnUrl";
		        public static readonly ID Id = new ID("{6040F190-4F2B-4E0B-AC0E-9619CAAD0917}");
            }
            
		}
	}
}


