package v1beta

import (
	"errors"
	"strings"
	"time"
)

// JobOffer defines the job_offers structure
type JobOffer struct {
	ID        int64     `json:"id" gorm:"column:id;primaryKey;autoIncrement:true"`
	CreatedAt time.Time `json:"createdat" gorm:"column:createdat"`
	UpdatedAt time.Time `json:"updatedat" gorm:"column:updatedat"`

	CompanyName       string `json:"company_name" gorm:"column:company_name"`
	CompanyEmail      string `json:"company_email" gorm:"column:company_email"`
	TitleID           int64  `json:"title" gorm:"column:title_id"`
	IsRemote          bool   `json:"is_remote" gorm:"column:is_remote"`
	City              string `json:"city" gorm:"column:city"`
	Country           string `json:"country" gorm:"column:country"`
	Department        string `json:"department" gorm:"column:department"`
	SalaryRangeMin    int64  `json:"salary_range_min" gorm:"column:salary_range_min"`
	SalaryRangeMax    int64  `json:"salary_range_max" gorm:"column:salary_range_max"`
	Description       string `json:"description" gorm:"column:description"`
	Benefits          string `json:"benefits" gorm:"column:benefits"`
	HowToApply        string `json:"how_to_apply" gorm:"column:how_to_apply"`
	ApplyUrl          string `json:"apply_url" gorm:"column:apply_url"`
	ApplyEmailAddress string `json:"apply_email_address" gorm:"column:apply_email_address"`
	ApplyPhoneNumber  string `json:"apply_phone_number" gorm:"column:apply_phone_number"`
	Tags              string `json:"tags" gorm:"column:tags"`
}

// OfferPostQuery defines the body object used to create a new jb offer on a POST query
type OfferPostQuery struct {
	CompanyName       string `json:"company_name"`
	CompanyEmail      string `json:"company_email"`
	JobTitle          string `json:"job_title"`
	IsRemote          bool   `json:"is_remote"`
	City              string `json:"city" gorm:"column:city"`
	Country           string `json:"country" gorm:"column:country"`
	Department        string `json:"department"`
	SalaryRangeMin    int64  `json:"salary_range_min"`
	SalaryRangeMax    int64  `json:"salary_range_max"`
	Description       string `json:"description"`
	Benefits          string `json:"benefits"`
	HowToApply        string `json:"how_to_apply"`
	ApplyUrl          string `json:"apply_url"`
	ApplyEmailAddress string `json:"apply_email_address"`
	ApplyPhoneNumber  string `json:"apply_phone_number"`
	Tags              string `json:"tags"`
}

// Validate check if the mandatory fields are filled, and make some changes in the tags field
func (r *OfferPostQuery) Validate() error {
	if !IsEmailValid(r.CompanyEmail) {
		return errors.New("company email is not a valid email address")
	}

	if strings.TrimSpace(r.CompanyName) == "" {
		return errors.New("company name is mandatory")
	}

	if strings.TrimSpace(r.JobTitle) == "" {
		return errors.New("job title is mandatory")
	}

	if strings.TrimSpace(r.Description) == "" {
		return errors.New("job description is mandatory")
	}

	if strings.TrimSpace(r.ApplyUrl) == "" && strings.TrimSpace(r.ApplyEmailAddress) == "" && strings.TrimSpace(r.ApplyPhoneNumber) == "" {
		return errors.New("apply url or apply email address or apply phone number is mandatory")
	}

	if strings.TrimSpace(r.ApplyEmailAddress) != "" {
		if !IsEmailValid(r.ApplyEmailAddress) {
			return errors.New("apply email address is not a valid email address")
		}
	}

	if strings.TrimSpace(r.ApplyPhoneNumber) != "" {
		if !IsPhoneNumberValid(r.ApplyPhoneNumber) {
			return errors.New("apply phone number is not a valid phone number")
		}
	}

	if r.SalaryRangeMin == 0 && r.SalaryRangeMax == 0 {
		return errors.New("salary range is mandatory")
	}

	if r.SalaryRangeMin > r.SalaryRangeMax {
		return errors.New("min salary is higher than max salary")
	}

	if (strings.TrimSpace(r.City) == "" || strings.TrimSpace(r.Country) == "") && !r.IsRemote {
		return errors.New("city and country are mandatory when is not remote")
	}

	r.Tags = FormatTags(r.Tags)
	return nil
}

type JobOfferPresenter struct {
	ID        int64     `json:"id" gorm:"column:id"`
	CreatedAt time.Time `json:"createdat" gorm:"column:createdat"`
	UpdatedAt time.Time `json:"updatedat" gorm:"column:updatedat"`

	CompanyName       string `json:"company_name"`
	JobTitle          string `json:"job_title"`
	IsRemote          bool   `json:"is_remote"`
	City              string `json:"city" gorm:"column:city"`
	Country           string `json:"country" gorm:"column:country"`
	Department        string `json:"department"`
	SalaryRangeMin    int64  `json:"salary_range_min"`
	SalaryRangeMax    int64  `json:"salary_range_max"`
	Description       string `json:"description"`
	Benefits          string `json:"benefits"`
	HowToApply        string `json:"how_to_apply"`
	ApplyUrl          string `json:"apply_url"`
	ApplyEmailAddress string `json:"apply_email_address"`
	ApplyPhoneNumber  string `json:"apply_phone_number"`
	Tags              string `json:"tags"`
}

type JobOffersResponse struct {
	Hits   []JobOfferPresenter `json:"hits"`
	NbHits int64               `json:"nbHits"`
	Offset int64               `json:"offset"`
	Limit  int64               `json:"limit"`
}

type GetJobOffersQuery struct {
	Page     string
	Offset   string
	Limit    string
	JobTitle string
	Company  string
	City     string
	Country  string
	IsRemote string
}
