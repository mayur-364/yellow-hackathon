// ReSharper Disable all
using global::Sitecore.Data;
using global::Sitecore.Data.Fields;
using global::Sitecore.Data.Items;
using global::System.CodeDom.Compiler;

namespace Platform.Models.Generated.Project.BlueYonder.CorporatePages
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface ICorporateBasePageItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class CorporateBasePage : CustomItem, ICorporateBasePageItem
	{
		public CorporateBasePage(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Corporate Base Page";
		public static ID ItemTemplateId => new ID("{046FD747-AE14-4480-9821-540724BB57EC}");
		
		public static implicit operator CorporateBasePage(Item item) => item != null ? new CorporateBasePage(item) : null;
		public static implicit operator Item(CorporateBasePage customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder.CorporatePages
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IHomePageItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class HomePage : CustomItem, IHomePageItem
	{
		public HomePage(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Home Page";
		public static ID ItemTemplateId => new ID("{5FEE350B-5CD8-467B-93D9-33A60B461B44}");
		
		public static implicit operator HomePage(Item item) => item != null ? new HomePage(item) : null;
		public static implicit operator Item(HomePage customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IHeadlessSiteItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class HeadlessSite : CustomItem, IHeadlessSiteItem
	{
		public HeadlessSite(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Headless Site";
		public static ID ItemTemplateId => new ID("{E59A3221-0B86-46CE-9608-49E2DDC87A3D}");
		
		public static implicit operator HeadlessSite(Item item) => item != null ? new HeadlessSite(item) : null;
		public static implicit operator Item(HeadlessSite customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IHeadlessTenantItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class HeadlessTenant : CustomItem, IHeadlessTenantItem
	{
		public HeadlessTenant(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Headless Tenant";
		public static ID ItemTemplateId => new ID("{424044BD-56E5-4D86-9F1E-743923166F04}");
		
		public static implicit operator HeadlessTenant(Item item) => item != null ? new HeadlessTenant(item) : null;
		public static implicit operator Item(HeadlessTenant customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IJssSettingsItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class JssSettings : CustomItem, IJssSettingsItem
	{
		public JssSettings(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "JSS Settings";
		public static ID ItemTemplateId => new ID("{2EE1FC9D-056C-480F-BD03-444804D56BA6}");
		
		public static implicit operator JssSettings(Item item) => item != null ? new JssSettings(item) : null;
		public static implicit operator Item(JssSettings customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPageItem
	{
		TextField ContentField { get; }
		TextField TitleField { get; }
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class Page : CustomItem, IPageItem
	{
		public Page(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Page";
		public static ID ItemTemplateId => new ID("{7518E3D2-B740-46A0-92C7-9E267E7E1AAF}");
		
		public TextField ContentField => new TextField(InnerItem.Fields[FieldConstants.Content.Id]);
		public TextField TitleField => new TextField(InnerItem.Fields[FieldConstants.Title.Id]);
		public static implicit operator Page(Item item) => item != null ? new Page(item) : null;
		public static implicit operator Item(Page customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			public struct Content
            {
		        public const string FieldName = "Content";
		        public static readonly ID Id = new ID("{00543C90-DE99-454F-8ACA-A3ADDD08CC0F}");
            }
            public struct Title
            {
		        public const string FieldName = "Title";
		        public static readonly ID Id = new ID("{ED506A36-C56E-4506-B142-9C5E266CBD39}");
            }
            
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPageDesignFolderItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class PageDesignFolder : CustomItem, IPageDesignFolderItem
	{
		public PageDesignFolder(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Page Design Folder";
		public static ID ItemTemplateId => new ID("{9938CE94-81DA-47CB-9C95-DF6E14DF41B0}");
		
		public static implicit operator PageDesignFolder(Item item) => item != null ? new PageDesignFolder(item) : null;
		public static implicit operator Item(PageDesignFolder customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPageDesignsItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class PageDesigns : CustomItem, IPageDesignsItem
	{
		public PageDesigns(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Page Designs";
		public static ID ItemTemplateId => new ID("{99D802A3-2E9B-402D-A720-BAEC9B26AE3A}");
		
		public static implicit operator PageDesigns(Item item) => item != null ? new PageDesigns(item) : null;
		public static implicit operator Item(PageDesigns customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPartialDesignFolderItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class PartialDesignFolder : CustomItem, IPartialDesignFolderItem
	{
		public PartialDesignFolder(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Partial Design Folder";
		public static ID ItemTemplateId => new ID("{FC6F3C19-E94A-4677-932F-73A87BDEDA86}");
		
		public static implicit operator PartialDesignFolder(Item item) => item != null ? new PartialDesignFolder(item) : null;
		public static implicit operator Item(PartialDesignFolder customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}

namespace Platform.Models.Generated.Project.BlueYonder
{
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public interface IPartialDesignsItem
	{
	}
	[GeneratedCode("Leprechaun", "2.0.0.0")]
	public class PartialDesigns : CustomItem, IPartialDesignsItem
	{
		public PartialDesigns(Item innerItem)
			:base(innerItem)
		{
		}
		public static string TemplateName => "Partial Designs";
		public static ID ItemTemplateId => new ID("{7D4C5190-6611-4957-BC42-E89FD93802B9}");
		
		public static implicit operator PartialDesigns(Item item) => item != null ? new PartialDesigns(item) : null;
		public static implicit operator Item(PartialDesigns customItem) => customItem?.InnerItem;
		public struct FieldConstants
		{
			
		}
	}
}


