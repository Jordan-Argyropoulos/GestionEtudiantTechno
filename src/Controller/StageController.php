<?php

namespace App\Controller;

use App\Entity\Stage;
use App\Repository\StageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[Route('/api/stage', name: 'api_stage')]

class StageController extends AbstractController
{
    private $entityManager;
    private $stageRepository;

    public function __construct(EntityManagerInterface $entityManager, StageRepository $stageRepository)
    {
        $this->entityManager = $entityManager;
        $this->stageRepository = $stageRepository;
    }

    #[Route('/create', name: 'api_stage_create', methods: ['POST'])]

    /**
     * @param Request $request
     * @param Stage $stage
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        $content = json_decode($request->getContent());
        $stage = new Stage();

        $stage->setName($content->name);

        try{
            $this->entityManager->persist($stage);
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //error
        }
        return $this->json([
            'stage' => $stage->toArray(),
            'message' => ['text' => 'Stage créée', 'level' => 'success']
        ]);
    }

    #[Route('/read', name: 'api_stage_read', methods: ['GET'])]
    
    public function index(): Response
    {
        $stages = $this->stageRepository->findAll();
        
        $arrayOfStages = [];
        foreach ($stages as $stage) {
            $arrayOfStages[] = $stage->toArray();
        }
        return $this->json($arrayOfStages);
    
    }



    #[Route('/update/{id}', name: 'api_stage_update', methods: ['PUT'])]

    /**
     * @param Request $request
     * @param Stage $stage
     * @return Symfony\Component\HttpFoundation\JsonResponse
     */
    public function update(Request $request, Stage $stage)
    {
        $content = json_decode($request->getContent());
        
        $stage->setName($content->name);

        try {
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //error
        }

        return $this->json([
            'message' => 'stage à été mis à jour'
        ]);
    }

    #[Route('/delete/{id}', name: 'api_stage_delete', methods: ['DELETE'])]

    /**
     * @param Stage $stage
     * @return void
     */
    public function delete(Stage $stage)
    {
        try {
            $this->entityManager->remove($stage);
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //error
        }

        return $this->json([
            'message' => 'stage supprimé',
        ]);



    }


}

