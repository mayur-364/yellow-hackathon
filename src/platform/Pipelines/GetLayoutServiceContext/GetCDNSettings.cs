using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Annotations;
using Sitecore.Data;
using Sitecore.JavaScriptServices.Configuration;
using Sitecore.JavaScriptServices.ViewEngine.LayoutService.Pipelines.GetLayoutServiceContext;
using Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext;
using xmcblueyonder.Extensions;

namespace xmcblueyonder.Pipelines.GetLayoutServiceContext
{
    [UsedImplicitly]
    public class GetCDNSettings : JssGetLayoutServiceContextProcessor
    {
        public GetCDNSettings(IConfigurationResolver configurationResolver) : base(configurationResolver)
        {

        }
        protected override void DoProcess(GetLayoutServiceContextArgs args, AppConfiguration application)
        {
            string cdnUrl = string.Empty;
            string cdnCss = string.Empty;
            string cdnLanguage = string.Empty;

            var CDNSettingsItem = args.RenderedItem.GetSiteSettingsChildrenItem(Constants.CDNSettings);

            if (CDNSettingsItem != null)
            {
                cdnUrl = CDNSettingsItem.GetFieldValue("cdnUrl");
                cdnCss = CDNSettingsItem.GetFieldValue("cdnCss");
                cdnLanguage = args.RenderedItem.Language.LanguageEnglishName.Split(' ').FirstOrDefault().ToLower();
            }
            if (!string.IsNullOrEmpty(cdnUrl))
            {
                args.ContextData.Add("CDNDetails", new CDNDetails { cdnUrl = cdnUrl, cdnCss = cdnCss, cdnLanguage = cdnLanguage });
            }
        }
    }

    public class CDNDetails
    {
        public string cdnUrl;
        public string cdnCss;
        public string cdnLanguage;

    }
}
