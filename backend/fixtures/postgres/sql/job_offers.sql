INSERT INTO job_offers (
        company_name,
        company_email,
        title_id,
        is_remote,
        location,
        department,
        salary_range_min,
        salary_range_max,
        description,
        benefits,
        how_to_apply,
        apply_url,
        apply_email_address,
        apply_phone_number,
        tags,
        createdat,
        updatedat
    )
VALUES (
        'Acme Corporation',
        'jobs@acmecorp.com',
        1,
        true,
        'Remote',
        'IT',
        50000,
        70000,
        'We are seeking a software engineer with experience in Java and Spring Framework.',
        'Health insurance, dental insurance, 401k',
        'Please submit your resume and cover letter.',
        'https://www.acmecorp.com/careers',
        'jobs@acmecorp.com',
        '555-555-5555',
        'Java, Spring, software engineer',
        '2022-01-01',
        '2022-01-01'
    ),
    (
        'Globex Corporation',
        'jobs@globexcorp.com',
        2,
        false,
        'New York, NY',
        'Marketing',
        60000,
        80000,
        'We are seeking a marketing specialist with experience in digital marketing and social media.',
        'Health insurance, dental insurance, 401k',
        'Please submit your resume and cover letter.',
        'https://www.globexcorp.com/careers',
        'jobs@globexcorp.com',
        '555-555-5555',
        'marketing, social media, digital marketing',
        '2022-01-02',
        '2022-01-02'
    ),
    (
        'Stark Industries',
        'jobs@starkindustries.com',
        3,
        false,
        'Los Angeles, CA',
        'Engineering',
        80000,
        100000,
        'We are seeking a mechanical engineer with experience in designing and testing electromechanical systems.',
        'Health insurance, dental insurance, 401k',
        'Please submit your resume and cover letter.',
        'https://www.starkindustries.com/careers',
        'jobs@starkindustries.com',
        '555-555-5555',
        'mechanical engineer, electromechanical systems',
        '2022-01-03',
        '2022-01-03'
    ),
    (
        'Wayne Enterprises',
        'jobs@wayneenterprises.com',
        4,
        true,
        'Remote',
        'Finance',
        70000,
        90000,
        'We are seeking a financial analyst with experience in budgeting and forecasting.',
        'Health insurance, dental insurance, 401k',
        'Please submit your resume and cover letter.',
        'https://www.wayneenterprises.com/careers',
        'jobs@wayneenterprises.com',
        '555-555-5555',
        'financial analyst, budgeting, forecasting',
        '2022-01-04',
        '2022-01-04'
    ),
    (
        'Umbrella Corporation',
        'jobs@umbrellacorp.com',
        5,
        false,
        'Raccoon City, IL',
        'Research and Development',
        90000,
        110000,
        'We are seeking a research scientist with experience in virology and molecular biology.',
        'Health insurance, dental insurance, 401k',
        'Please submit your resume and cover letter.',
        'https://www.umbrellacorp.com/careers',
        'jobs@umbrellacorp.com',
        '555-555-5555',
        'research scientist, virology, molecular biology',
        '2022-01-05',
        '2022-01-05'
    )