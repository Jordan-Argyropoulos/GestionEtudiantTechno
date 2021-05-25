<?php

namespace App\Controller;

use App\Repository\StageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[Route('/api/stage', name: 'stage')]

class StageController extends AbstractController
{
    private $entityManager;
    private $stageRepository;

    public function __construct(EntityManagerInterface $entityManager, StageRepository $stageRepository)
    {
        $this->entityManager = $entityManager;
        $this->stageRepository = $stageRepository;
    }

    #[Route('/read', name: 'stage')]
    public function index(): Response
    {
        $stages = $this->stageRepository->findAll();

        $arrayOfStages = [];
        foreach ($stages as $stage) {
            $arrayOfStages[] = $stage->toArray();
        }
        return $this->json($arrayOfStages);
    
    }
}

