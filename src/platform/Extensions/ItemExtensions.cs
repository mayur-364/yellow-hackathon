using System;
using System.Collections.Generic;
using System.Linq;
using Sitecore;
using Sitecore.Collections;
using Sitecore.Configuration;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Links.UrlBuilders;
using Sitecore.Resources.Media;
using Sitecore.Sites;

namespace xmcblueyonder.Extensions
{
    public static class ItemExtensions
    {
        private const string StandardValues = "__Standard Values";

        public static IEnumerable<Item> GetDescendants(this Item i, bool returnRootItem = false)
        {
            if (returnRootItem)
            {
                yield return i;
            }

            foreach (Item c in i.GetChildren(ChildListOptions.SkipSorting))
            {
                foreach (var subChild in c.GetDescendants(true))
                {
                    yield return subChild;
                }
            }
        }
        /// <summary>
        /// Get Items selected in multilist field.
        /// </summary>
        /// <param name="i"></param>
        /// <param name="multiListFieldName"></param>
        /// <returns></returns>
        public static List<Item> GetSelectedItems(this Item i, string multiListFieldName)
        {
            if (i == null)
            {
                return new List<Item>();
            }

            MultilistField mlf = i.Fields[multiListFieldName];
            return mlf != null ? mlf.GetItems().ToList() : new List<Item>();
        }

        public static Item GetInternalLinkFieldItem(this Item i, string internalLinkFieldName)
        {
            InternalLinkField ilf = i?.Fields[internalLinkFieldName];
            return ilf?.TargetItem;
        }


        public static string GetLinkFriendlyUrl(this Item item, string fieldName)
        {
            LinkField lf = item?.Fields[fieldName];
            return lf?.GetFriendlyUrl();
        }


        public static Item GetLinkTargetItem(this Item item, string fieldName)
        {
            LinkField lf = item?.Fields[fieldName];
            return lf?.TargetItem;
        }

        public static string GetFieldValue(this Item item, string fieldName, string nullValue = "")
        {
            if (item == null)
            {
                return nullValue;
            }

            var field = item.Fields[fieldName];
            if (field == null)
            {
                return nullValue;
            }

            return (string.IsNullOrWhiteSpace(field.Value)) ? nullValue : field.Value;
        }
        public static string GetFieldValue(this Item item, ID fieldId, string nullValue = "")
        {
            if (item == null)
            {
                return nullValue;
            }

            var field = item.Fields[fieldId];
            if (field == null)
            {
                return nullValue;
            }

            return (string.IsNullOrWhiteSpace(field.Value)) ? nullValue : field.Value;
        }

        public static string GetMediaUrl(this Item item, string fieldName, bool includeServerUrl = false)
        {
            if (item == null)
            {
                return string.Empty;
            }

            var imgField = (ImageField)item.Fields[fieldName];
            if (imgField?.MediaItem != null)
            {
                MediaUrlBuilderOptions opts = new MediaUrlBuilderOptions { AlwaysIncludeServerUrl = includeServerUrl };
                return MediaManager.GetMediaUrl(imgField.MediaItem, opts);
            }

            return string.Empty;
        }

        public static bool GetCheckBoxFieldValue(this Item i, string fieldName, bool defaultReturnValue)
        {
            var returnValue = GetCheckBoxFieldNullableValue(i, fieldName);
            return returnValue ?? defaultReturnValue;
        }

        public static bool? GetCheckBoxFieldNullableValue(this Item i, string fieldName)
        {
            bool? returnValue = null;
            CheckboxField cbf = i?.Fields[fieldName];
            if (cbf != null)
            {
                returnValue = cbf.Checked;
            }
            return returnValue;
        }

        /// <summary>
        /// Access Droplink, Droptree, and Grouped Droplink fields
        /// </summary>
        /// <returns>The Sitecore target item</returns>
        public static Item GetReferenceTargetItem(this Item item, string fieldName)
        {
            ReferenceField rf = item?.Fields[fieldName];
            return rf?.TargetItem;
        }

        public static bool HasAncestor(this Item item, string parentId) => item != null && item.Paths.LongID.Contains(parentId);

        public static Item GetFirstChildOfTemplate(this Item item, ID templateId)
        {
            return item?.GetChildren().FirstOrDefault(e => e.TemplateID == templateId);
        }

        public static Item GetFirstParentOfTemplate(this Item currentItem, string baseTemplateNameOrId)
        {
            if (currentItem == null)
            {
                return null;
            }
            if (IsMatchOnTemplateNameOrId(baseTemplateNameOrId, currentItem.Template))
            {
                return currentItem;
            }
            var parent = currentItem.Parent;
            while (parent != null && IsMatchOnTemplateNameOrId(baseTemplateNameOrId, parent.Template) == false)
            {
                parent = parent.Parent;
            }
            return parent;
        }

        public static Item GetSiteSettingsItem(this Item renderedItem, string templateName)
        {
            if (renderedItem == null)
                return null;
            Item siteItem = renderedItem.GetFirstParentOfTemplate(Constants.HeadlessSiteTemplateName);
            if (siteItem == null)
                return null;
            return siteItem?.GetChildren().FirstOrDefault(e => e.TemplateName == templateName);

        }
        public static Item GetSiteSettingsChildrenItem(this Item renderedItem, string templateName)
        {
            if (renderedItem == null)
                return null;
            Item siteSettingsItem = renderedItem.GetSiteSettingsItem(Constants.JssSettingsTemplateName);
            if (siteSettingsItem == null)
                return null;
            return siteSettingsItem?.GetChildren().FirstOrDefault(e => e.TemplateName == templateName);

        }

        public static bool IsNull(this Item item)
        {
            return item == null || item.Version.Number == 0 || item.Versions.Count == 0;
        }

        public static bool HasBaseTemplate(this Item item, string baseTemplateNameOrId)
        {
            if (IsNull(item) || item.TemplateID.IsNull) return false;

            var template = item.Template;

            if (template == null) return false;

            return IsMatchOnTemplateNameOrId(baseTemplateNameOrId, template) || HasBaseTemplateHelper(item.Template.BaseTemplates, baseTemplateNameOrId);
        }

        private static bool HasBaseTemplateHelper(TemplateItem[] baseTemplates, string baseTemplateNameOrId)
        {
            var templateFound = false;
            foreach (var baseTemplateItem in baseTemplates.Where(baseTemplateItem => !IsNull(baseTemplateItem) && !baseTemplateItem.ID.IsNull))
            {
                templateFound = IsMatchOnTemplateNameOrId(baseTemplateNameOrId, baseTemplateItem) || HasBaseTemplateHelper(baseTemplateItem.BaseTemplates, baseTemplateNameOrId);

                if (templateFound)
                {
                    break;
                }
            }
            return templateFound;
        }

        private static bool IsMatchOnTemplateNameOrId(string baseTemplateNameOrId, TemplateItem baseTemplateItem)
        {
            return baseTemplateItem.ID.Guid.ToString("B").Equals(baseTemplateNameOrId, StringComparison.OrdinalIgnoreCase) ||
                   baseTemplateItem.FullName.Equals(baseTemplateNameOrId, StringComparison.OrdinalIgnoreCase) ||
                   baseTemplateItem.Name.Equals(baseTemplateNameOrId, StringComparison.OrdinalIgnoreCase);
        }

        public static SiteContext GetSiteContext(this Item i)
        {
            var list = Factory.GetSiteInfoList().OrderByDescending(x => x.RootPath.Length).Where(x => x.Domain != "sitecore" && !x.VirtualFolder.StartsWith("/sitecore")).ToList();
            var si = list.FirstOrDefault(x => i.Paths.FullPath.StartsWith(x.RootPath + x.StartItem, StringComparison.InvariantCultureIgnoreCase));
            if (si != null)
            {
                return SiteContext.GetSite(si.Name);
            }
            return null;
        }

        public static bool HasLayout(this Item item)
        {
            return item?.Visualization.GetLayout(Context.Device) != null;
        }

        public static DateTime? GetNullableDate(this Item item, string fieldName)
        {
            if (item == null) return null;

            DateField df = item.Fields[fieldName];
            return df?.DateTime;
        }

        public static DateTime GetDate(this Item item, string fieldName)
        {
            if (item == null) return DateTime.MinValue;

            DateField df = item.Fields[fieldName];
            return df?.DateTime ?? DateTime.MinValue;
        }

        public static Item[] GetReferrers(this Item item, bool includeStandardValues = false)
        {
            if (item == null)
                return Array.Empty<Item>();
            var links = Globals.LinkDatabase.GetReferrers(item);
            if (links == null)
                return Array.Empty<Item>();
            var linkedItems = links.Select(i => i.GetSourceItem()).Where(i => i != null);
            if (!includeStandardValues)
                linkedItems = linkedItems.Where(i => !i.Name.Equals(StandardValues, StringComparison.InvariantCultureIgnoreCase));
            return linkedItems.ToArray();
        }
    }
}

