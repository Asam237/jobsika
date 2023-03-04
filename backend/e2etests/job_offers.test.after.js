import { expect } from "chai";
import request from "supertest";
import dotenv from "dotenv";

dotenv.config();
const apiHost = process.env.API_HOST;
const endpoint = "jobs";


describe(`${endpoint}`, function () {
    describe("POST", function () {
        it("post a valid job offer", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    location: "Douala, CM",
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    department: "Research and Development",
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    benefits: "Health insurance, dental insurance, 401k",
                    how_to_apply: "Please submit your resume and cover letter.",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com",
                    apply_phone_number: "555-555-5555"
                })
                .expect(201)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(res.body.company_name).equal("OssCameroon");
                });
        });

        it("post a job offer without email", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("company email is not a valid email address");
                });
        });

        it("post a job offer without a valid email", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("company email is not a valid email address");
                });
        });

        it("post a job offer without company name", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("company name is mandatory");
                });
        });

        it("post a job offer without job title", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("job title is mandatory");
                });
        });

        it("post a job offer without description", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("job description is mandatory");
                });
        });

        it("post a job offer without apply url and apply email address and apply phone number", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "",
                    apply_phone_number: ""
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("apply url or apply email address or apply phone number is mandatory");
                });
        });

        it("post a job offer without a valid apply email address", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("apply email address is not a valid email address");
                });
        });

        it("post a job offer without a valid apply phone number", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: true,
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    how_to_apply: "",
                    apply_url: "",
                    apply_email_address: "",
                    apply_phone_number: "invalid phone number"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("apply phone number is not a valid phone number");
                });
        });

        it("post a job offer without a location and no remote should fail", async function () {
            return request(apiHost)
                .post(`${endpoint}`)
                .set("Accept", "application/json")
                .send({
                    company_email: "ossdevs-cm@gmail.com",
                    company_name: "OssCameroon",
                    job_title: "Frontend Dev",
                    is_remote: false,
                    location: "",
                    salary_range_min: 100000,
                    salary_range_max: 150000,
                    department: "Research and Development",
                    description: "OssCameroon is hiring a Remote Go Backend Engineer \n Remote - We are looking for a backend engineer who can work 30+ hr/weekOur ideal candidate has:- 1+ years experience writing in Go (golang.org)- 2-3 years experience writing REST APIs- Experience working at a small startup- A passion for building something meaningful â€¦ Salary and compensation No salary data published by company so we estimated salary based on similar jobs related to Golang, Engineer and Backend jobs that are similar: $70,000 — $120000/year",
                    benefits: "Health insurance, dental insurance, 401k",
                    how_to_apply: "Please submit your resume and cover letter.",
                    apply_url: "",
                    apply_email_address: "ossdevs-cm@gmail.com",
                    apply_phone_number: "555-555-5555"
                })
                .expect(400)
                .expect("Content-Type", "application/json; charset=utf-8")
                .then((res) => {
                    expect(JSON.stringify(res.body)).contain("location is mandatory when is not remote");
                });
        });
    });
});